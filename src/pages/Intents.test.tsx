import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Intents } from './Intents';
import { intents } from '../constants/intents';
import { expect } from 'vitest';

describe('<Intents />', () => {
  it('should display the title', () => {
    render(<Intents />);

    expect(screen.getByText('Intents')).toBeVisible();
  });

  it('should list all intents by name', () => {
    render(<Intents />);

    intents.forEach((intent) => {
      // Some intent names appear as example messages as well
      expect(screen.getAllByText(intent.name)[0]).toBeVisible();
    });
  });

  it('clicking an intent should make the description visible', async () => {
    render(<Intents />);

    const greeting = screen.getByText('Greeting');
    fireEvent.click(greeting);
    const description = await screen.getByText('The visitor says hello.');

    expect(description).toBeVisible();
  });

  it('enables intent selection and deselection', async () => {
    render(<Intents />);

    const checkbox1 = screen.getByTestId(`checkbox-${intents[0].id}`);
    fireEvent.click(checkbox1.querySelector('input') as HTMLInputElement);
    const checkbox2 = screen.getByTestId(`checkbox-${intents[3].id}`);
    fireEvent.click(checkbox2.querySelector('input') as HTMLInputElement);
    const checkbox3 = screen.getByTestId(`checkbox-${intents[5].id}`);

    expect(checkbox1).not.toHaveClass('Mui-checked');
    expect(checkbox2).not.toHaveClass('Mui-checked');
    expect(checkbox3).toHaveClass('Mui-checked');
  });
});
