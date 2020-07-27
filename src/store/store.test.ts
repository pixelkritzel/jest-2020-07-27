import { Istore, store } from './index';

let storeInstance: Istore;

beforeEach(() => {
  storeInstance = store.create();
});

test('store has counter property of type number', () => {
  expect(typeof storeInstance.counter).toEqual('number');
});

test('increment to increment the counter by one', () => {
  const previousCounter = storeInstance.counter;
  storeInstance.increment();
  expect(storeInstance.counter).toEqual(previousCounter + 1);
});

test('decrement to decrement the counter by one', () => {
  const previousCounter = storeInstance.counter;
  storeInstance.decrement();
  expect(storeInstance.counter).toEqual(previousCounter - 1);
});
