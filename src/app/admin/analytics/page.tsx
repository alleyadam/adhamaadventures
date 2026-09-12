'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, Globe, MapPin, Monitor, Smartphone, Download, UserCheck, TrendingUp, Users, Calendar as CalendarIcon, X, FileText } from 'lucide-react';
import { useFirestore, useCollection } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { format, startOfDay, endOfDay, isSameDay } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

export default function AnalyticsPage() {
  const router = useRouter();
  const db = useFirestore();

  // State for date filtering
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  // Fetch more logs for a better overview (up to 500)
  const visitsQuery = query(collection(db, 'visitor_logs'), orderBy('timestamp', 'desc'), limit(500));
  const { data: logs, loading } = useCollection<any>(visitsQuery);

  // Filter logs based on selection
  const filteredLogs = useMemo(() => {
    if (!logs) return [];
    if (!dateRange?.from) return logs;

    return logs.filter(log => {
      const logDate = log.timestamp?.toDate();
      if (!logDate) return false;

      if (dateRange.to) {
        // Range filtering
        return logDate >= startOfDay(dateRange.from!) && logDate <= endOfDay(dateRange.to!);
      } else {
        // Single day filtering
        return isSameDay(logDate, dateRange.from!);
      }
    });
  }, [logs, dateRange]);

  // 1. Process Chart Data (Visits throughout the year)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const yearlyData = months.map((m, i) => {
    const count = filteredLogs?.filter(log => {
      const date = log.timestamp?.toDate();
      return date && date.getMonth() === i && date.getFullYear() === new Date().getFullYear();
    }).length || 0;
    return { name: m, visits: count };
  });

  // 2. Process Country Breakdown
  const countryCounts: Record<string, number> = {};
  filteredLogs?.forEach(log => {
    const c = log.country || 'Unknown';
    countryCounts[c] = (countryCounts[c] || 0) + 1;
  });
  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const totalUniqueHits = filteredLogs?.length || 0;
  const repeatVisitors = filteredLogs?.filter(l => l.isRepeat).length || 0;

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Time,Country,Path,Device,Repeat\n"
      + filteredLogs?.map(l => `${format(l.timestamp?.toDate() || new Date(), 'yyyy-MM-dd HH:mm')},${l.country},${l.path},${l.platform},${l.isRepeat ? 'Yes' : 'No'}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `adhama_analytics_${format(new Date(), 'yyyy_MM_dd')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#fdfaf5] pb-20 print:bg-white print:pb-0">
      <div className="bg-secondary text-white py-12 border-b-4 border-primary print:bg-white print:text-secondary print:py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 mb-4 rounded-none font-bold uppercase tracking-widest text-[10px] print:hidden"
              onClick={() => router.push('/admin')}
            >
              <ArrowLeft className="mr-2 h-4 w-4 text-primary" /> Back to Dashboard
            </Button>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">Traffic Analytics</h1>
            <p className="text-white/80 mt-1 uppercase tracking-widest text-[10px] font-bold print:text-secondary/60">
              {dateRange?.from ? (
                dateRange.to ? `Report: ${format(dateRange.from, "PPP")} to ${format(dateRange.to, "PPP")}` : `Report: ${format(dateRange.from, "PPP")}`
              ) : "Full Period Performance Report"}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end gap-4 print:hidden">
             {/* Date Range Picker */}
            <div className="flex flex-col gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest opacity-60">Filter by Date or Range</span>
                <div className="flex items-center gap-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                id="date"
                                variant={"outline"}
                                className={cn(
                                    "w-[260px] justify-start text-left font-bold text-[10px] uppercase tracking-widest rounded-none bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white h-12",
                                    !dateRange && "text-white/60"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                                {dateRange?.from ? (
                                    dateRange.to ? (
                                        <>
                                            {format(dateRange.from, "LLL dd, y")} -{" "}
                                            {format(dateRange.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(dateRange.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>All Time</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-none" align="end">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={dateRange?.from}
                                selected={dateRange}
                                onSelect={setDateRange}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                    {dateRange && (
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-white hover:bg-white/10" 
                            onClick={() => setDateRange(undefined)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>

            <div className="flex gap-2">
              <Button 
                  onClick={handleExportCSV}
                  variant="outline"
                  className="bg-white/5 border-white/20 hover:bg-white/10 text-white rounded-none font-black uppercase tracking-widest text-[10px] h-12 px-6 transition-all"
              >
                  <Download className="mr-2 h-4 w-4 text-primary" /> CSV
              </Button>
              <Button 
                  onClick={handleExportPDF}
                  className="bg-primary hover:bg-white hover:text-secondary rounded-none font-black uppercase tracking-widest text-[10px] h-12 px-8 transition-all shadow-xl shadow-primary/20"
              >
                  <FileText className="mr-2 h-4 w-4" /> Export PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 print:mt-4">
        <div className="grid lg:grid-cols-4 gap-6 mb-8 print:grid-cols-2">
          <Card className="p-6 rounded-none shadow-md border-t-4 border-primary">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Users className="h-3 w-3 text-primary" /> Total Unique Hits
              </p>
              <h4 className="text-3xl font-black text-secondary">{totalUniqueHits}</h4>
              <p className="text-[9px] text-muted-foreground italic">(1 visit per device per day)</p>
            </div>
          </Card>
          <Card className="p-6 rounded-none shadow-md border-t-4 border-accent">
             <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <UserCheck className="h-3 w-3 text-accent" /> Returning Explorers
              </p>
              <h4 className="text-3xl font-black text-secondary">{repeatVisitors}</h4>
              <p className="text-[9px] text-muted-foreground italic">({totalUniqueHits > 0 ? Math.round((repeatVisitors / totalUniqueHits) * 100) : 0}% of total traffic)</p>
            </div>
          </Card>
          <Card className="p-6 rounded-none shadow-md lg:col-span-2 print:col-span-2">
             <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Top Market Breakdown</p>
              <div className="flex gap-4 flex-wrap">
                {topCountries.map(([name, count]) => (
                  <div key={name} className="bg-muted/50 px-3 py-1 flex items-center gap-2 border">
                    <span className="text-[10px] font-black text-secondary">{name}</span>
                    <span className="text-[10px] font-bold text-primary">{count}</span>
                  </div>
                ))}
                {topCountries.length === 0 && <span className="text-[10px] text-muted-foreground italic">No market data found.</span>}
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8 print:block">
          {/* Main Chart */}
          <Card className="lg:col-span-2 rounded-none border-none shadow-xl overflow-hidden print:shadow-none print:border print:mb-8">
            <CardHeader className="bg-white border-b flex flex-row items-center justify-between">
              <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" /> Traffic Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#6F6258' }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fontWeight: 700, fill: '#6F6258' }} 
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(155, 89, 41, 0.05)' }}
                      contentStyle={{ borderRadius: '0px', border: '1px solid #DCCFC2', fontWeight: 700, fontSize: '12px' }}
                    />
                    <Bar dataKey="visits" radius={[4, 4, 0, 0]}>
                      {yearlyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.visits > 0 ? '#9B5929' : '#DCCFC2'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Regional Insights */}
          <Card className="rounded-none border-none shadow-xl bg-secondary text-white print:bg-white print:text-secondary print:shadow-none print:border">
            <CardHeader className="border-b border-white/10 print:border-muted">
              <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" /> Market Share
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <p className="text-xs opacity-60 leading-relaxed italic print:text-muted-foreground">Understanding where your visitors dream from helps curate better itineraries.</p>
                <div className="space-y-4 pt-4">
                  {topCountries.map(([name, count], i) => (
                    <div key={name} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-black uppercase">
                        <span>{name}</span>
                        <span>{totalUniqueHits > 0 ? Math.round((count / totalUniqueHits) * 100) : 0}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 overflow-hidden print:bg-muted">
                        <div className="h-full bg-primary" style={{ width: `${totalUniqueHits > 0 ? (count / totalUniqueHits) * 100 : 0}%` }} />
                      </div>
                    </div>
                  ))}
                  {topCountries.length === 0 && <p className="text-[10px] opacity-40 italic">No geographic data available.</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-none border-none shadow-xl overflow-hidden print:shadow-none print:border">
          <CardHeader className="bg-white border-b">
            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary flex items-center gap-2">
              <Monitor className="h-4 w-4 text-primary" /> Activity Log
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted/30 text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b">
                  <tr>
                    <th className="p-4">Time</th>
                    <th className="p-4">Origin</th>
                    <th className="p-4">Path</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Device</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {filteredLogs?.map((log) => (
                    <tr key={log.id} className="border-b hover:bg-primary/5 transition-colors">
                      <td className="p-4 font-bold text-secondary">
                        {log.timestamp ? format(log.timestamp.toDate(), 'HH:mm • MMM dd') : '...'}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-primary" />
                          <span className="font-bold">{log.country}</span>
                          <span className="text-[9px] opacity-40">({log.timezone})</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-secondary/5 px-2 py-1 rounded text-primary font-mono text-[10px]">{log.path}</span>
                      </td>
                      <td className="p-4">
                        {log.isRepeat ? (
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter">Returning</span>
                        ) : (
                          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter">First Visit</span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 opacity-60">
                          {log.platform?.toLowerCase().includes('win') || log.platform?.toLowerCase().includes('mac') ? <Monitor className="h-3 w-3" /> : <Smartphone className="h-3 w-3" />}
                          {log.platform}
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredLogs?.length === 0 && !loading && (
                    <tr>
                      <td colSpan={5} className="p-20 text-center text-muted-foreground italic">No activity found for the selected filter.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}