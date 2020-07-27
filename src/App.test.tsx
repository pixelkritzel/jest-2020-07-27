import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';

import { App } from './App';
import { store } from './store';

jest.mock('./store', () => ({
  store: {
    create() {
      return {
        counter: 50,
        increment: jest.fn().mockImplementation(() => console.log('Running mock increment')),
        decrement: jest.fn().mockImplementation(() => console.log('Running mock decrement')),
      };
    },
  },
}));

beforeAll(() => (mockedStore = mocked(store, true).create()));

let mockedStore = mocked(store, true).create();

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
