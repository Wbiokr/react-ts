import { Common } from '@/interface/common';

const initState: Common = {
  token: sessionStorage.token||'',
  name: 'wbiokr',
};

export default (state: Common=initState, action: Common) => {
  switch(action.type) {
    default:
      return state
  }
}