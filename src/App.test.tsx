import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';

import { App } from './App';
import { store } from './store';

const mockDecrement = jest.fn().mockImplementation(() => console.log('Running mock decrement'));

const mockIncrement = jest.fn().mockImplementation(() => console.log('Running mock increment'));

jest.mock('./store', () => ({
  store: {
    create() {
      return {
        counter: 50,
        increment: mockIncrement,
        decrement: mockDecrement,
      };
    },
  },
}));

let mockedStore = store.create();

beforeEach(() => (mockedStore = store.create()));

test('The increment Button to call store.increment', () => {
  const { getByText } = render(<App />);
  const button = getByText('+');
  userEvent.click(button);
  expect(mockedStore.increment).toBeCalled();
});

test('The decrement Button to call store.decrement', () => {
  const { getByText } = render(<App />);
  const button = getByText('-');
  userEvent.click(button);
  expect(mockedStore.decrement).toBeCalled();
});

test('The counter value is displayed in the component', () => {
  const { getByTestId } = render(<App />);
  const output = getByTestId('output');
  expect(output).toHaveTextContent(mockedStore.counter.toString());
});
