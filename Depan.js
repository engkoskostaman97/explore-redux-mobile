import Counter from './Counter';
import React from 'react';
import {Provider} from 'react-redux';
import storeState from './redux/store';

const Depan = () => {
  return (
    <Provider store={storeState}>
      <Counter />
    </Provider>
  );
};

export default Depan;
