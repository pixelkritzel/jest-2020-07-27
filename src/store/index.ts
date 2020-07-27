import { types, Instance } from 'mobx-state-tree';

export const store = types
  .model('store', {
    counter: 50,
  })
  .actions((self) => ({
    increment() {
      console.log('original icrement');
      self.counter++;
    },
    decrement() {
      console.log('original decrement');
      self.counter--;
    },
  }));

export type Istore = Instance<typeof store>;
