import {TAMBAH, KURANG} from './tipe';

const iniData = {
  counter: 0,
};

export const reducerCounter = (state = iniData, action) => {
  switch (action.type) {
    case TAMBAH:
      console.log('TAMBAH COUNTER');
      return {...state, counter: action.data + 1};
    case KURANG:
      console.log('TAMBAH COUNTER');
      return {...state, counter: action.data - 1};
    default:
      return state;
  }
};
