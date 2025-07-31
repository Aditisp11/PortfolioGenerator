import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PortfolioProvider } from './context/PortfolioContext';
import TemplateSelection from './components/TemplateSelection';
import PortfolioForm from './components/PortfolioForm';
import PortfolioDisplay from './components/PortfolioDisplay';
import TemplateOne from './components/templates/TemplateOne';
import TemplateTwo from './components/templates/TemplateTwo';

const App = () => (
  <PortfolioProvider>
    <Router>
      <Routes>
        <Route path="/" element={<TemplateSelection />} />
        <Route path="/form" element={<PortfolioForm />} />
        <Route path="/portfolios" element={<PortfolioDisplay />} />
        <Route path="/template1/:id" element={<TemplateOne />} />
        <Route path="/template2/:id" element={<TemplateTwo />} />
      </Routes>
    </Router>
  </PortfolioProvider>
);

export default App;
