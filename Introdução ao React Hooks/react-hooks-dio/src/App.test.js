import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

const response = { speaker: 'test speaker', quote: 'test quote', };

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app button', () => {
    render(<App />);

    const buttonEl = screen.getByRole('button');

    expect(buttonEl).toBeInTheDocument();
});

test('calls api on startup and renders it response', () => {
    render(<App />);

    const quoteEl = screen.getByText(/test quote/);

    expect(quoteEl).toBeInTheDocument();
});

test('calls api on button click and update its text', () => {
    const customResponse = {
        speaker: 'custom test speaker',
        quote: 'teste quote',
    };

    render(<App />);

    server.use(
        rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
            return res(ctx.json(customResponse));
        })
    );

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);
    const quoteEl = screen.getByText("custom test speaker");

    expect(quoteEl).toBeInTheDocument();
})