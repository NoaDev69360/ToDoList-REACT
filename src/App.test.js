import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app todo list title', () => {
  render(<App />);
  const linkElement = screen.getByText(/App Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
