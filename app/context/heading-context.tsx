import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Heading {
  title: string;
  children?: Heading[];
}

interface HeadingsContextType {
  headings: Heading[];
  setHeadings: (headings: Heading[]) => void;
}

const HeadingsContext = createContext<HeadingsContextType | undefined>(undefined);

export const HeadingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  return (
    <HeadingsContext.Provider value={{ headings, setHeadings }}>
      {children}
    </HeadingsContext.Provider>
  );
};

export const useHeadings = (): HeadingsContextType => {
  const context = useContext(HeadingsContext);
  if (context === undefined) {
    throw new Error('useHeadings must be used within a HeadingsProvider');
  }
  return context;
};
