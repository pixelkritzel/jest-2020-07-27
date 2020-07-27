import React from 'react';

import { observer } from 'mobx-react';
import { store } from './store';

@observer
export class App extends React.Component {
  store = store.create();

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            console.log('increment from the component');
            this.store.increment();
          }}
        >
          +
        </button>
        Counter: <span data-testid="output">{this.store.counter}</span>
        <button
          type="button"
          onClick={() => {
            console.log('decrement from the component');
            this.store.decrement();
          }}
        >
          -
        </button>
      </div>
    );
  }
}
