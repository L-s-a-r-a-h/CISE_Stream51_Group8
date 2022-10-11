import { render, screen } from '@testing-library/react';
import ArticleSummary from './components/ArticleSummary';



test('Article Summary', () => {
    expect('Article Summary').not.toMatch(/B/);
  });
  
  