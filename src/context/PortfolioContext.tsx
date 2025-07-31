import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PortfolioData {
  id: string;
  template: 'template1' | 'template2';
  name: string;
  title: string;
  bio: string;
  image: string;
  skills: string[];
}

interface PortfolioContextProps {
  portfolios: PortfolioData[];
  addOrUpdatePortfolio: (data: PortfolioData) => void;
  selected: PortfolioData | null;
  setSelected: (data: PortfolioData | null) => void;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<PortfolioData[]>([]);
  const [selected, setSelected] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('portfolios');
    if (data) setPortfolios(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolios', JSON.stringify(portfolios));
  }, [portfolios]);

  const addOrUpdatePortfolio = (data: PortfolioData) => {
    setPortfolios((prev) => {
      const exists = prev.find((p) => p.id === data.id);
      if (exists) {
        return prev.map((p) => (p.id === data.id ? data : p));
      }
      return [...prev, data];
    });
  };

  return (
    <PortfolioContext.Provider value={{ portfolios, addOrUpdatePortfolio, selected, setSelected }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) throw new Error('usePortfolio must be used within PortfolioProvider');
  return context;
};
