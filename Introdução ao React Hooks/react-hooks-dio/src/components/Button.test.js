import {render, screen} from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom/extend-expect';

test('renders button with text', () => {
    render(<Button>Test</Button>)

    const ButtonEl = screen.getByText('Test');

    expect(ButtonEl).toBeInTheDocument();
})