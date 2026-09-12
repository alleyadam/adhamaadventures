'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { askAssistant } from '@/ai/flows/assistant-flow';
import { cn } from '@/lib/utils';

/**
 * @fileOverview Adhama AI Assistant Widget.
 * Refactored for viewport safety on short/mobile devices (320px+).
 */

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Karibu! I'm Adhama, your AI safari assistant. How can I help you plan your journey through Tanzania today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chat, isLoading]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (assistantRef.current && !assistantRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage('');
    setChat(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = chat.map(c => ({
        role: c.role,
        content: [{ text: c.text }]
      }));
      const reply = await askAssistant({ message: userMessage, history });
      setChat(prev => [...prev, { role: 'model', text: reply || "I'm sorry, I couldn't process that. Please try again." }]);
    } catch (error) {
      setChat(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the plains. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={assistantRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[80] p-4 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-500 hover:bg-secondary group border border-white/20"
        aria-label={isOpen ? "Close Assistant" : "Open Assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {!isOpen && (
          <span className="hidden lg:block absolute left-full ml-6 top-1/2 -translate-y-1/2 bg-white text-primary text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-none shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap border-b-2 border-primary translate-x-[-10px] group-hover:translate-x-0 pointer-events-none">
            Talk to an Expert
          </span>
        )}
      </button>

      {isOpen && (
        <Card className="fixed bottom-24 left-4 right-4 sm:left-6 sm:right-auto sm:w-[380px] z-[80] max-h-[70vh] sm:h-[550px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border-none animate-in slide-in-from-bottom-5 duration-500 rounded-2xl bg-white">
          <div className="bg-primary p-6 text-white relative shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl leading-none">Adhama AI</h3>
                <p className="text-[10px] uppercase tracking-widest opacity-60 mt-2 font-bold">Safari Specialist</p>
              </div>
            </div>
            <div className="absolute top-6 right-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                <span className="text-[8px] font-black uppercase tracking-widest opacity-80">Online</span>
              </div>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#F8F4ED]">
            {chat.map((c, i) => (
              <div key={i} className={cn("flex", c.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div className={cn(
                  "max-w-[88%] p-4 text-sm leading-relaxed shadow-sm",
                  c.role === 'user' 
                    ? 'bg-primary text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white text-secondary rounded-2xl rounded-tl-none border border-secondary/5'
                )}>
                  {c.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm rounded-tl-none border border-secondary/5 flex items-center gap-3">
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">Adhama is typing...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white border-t flex gap-2 shrink-0">
            <Input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about the Serengeti..."
              className="rounded-none h-12 text-sm border-none bg-muted/30 focus-visible:ring-primary"
              disabled={isLoading}
              maxLength={500}
            />
            <Button size="icon" className="shrink-0 bg-primary hover:bg-secondary h-12 w-12 rounded-none transition-colors" disabled={isLoading || !message.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}