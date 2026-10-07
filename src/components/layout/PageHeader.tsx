import React from 'react';

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-secondary text-primary-foreground pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute -bottom-20 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[100%] bg-background" />
      <div className="container mx-auto max-w-6xl px-4 text-center md:px-6 relative">
        <h1 className="text-4xl font-black md:text-6xl uppercase leading-tight">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-primary-foreground/80 font-serif italic leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
