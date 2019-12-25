import { push } from 'react-router-redux';
import { Common } from '@/interface/common';

export const login = (prams: Common) => async (dispatch: Function)=>{
  console.log(prams);
  console.log(dispatch)
}