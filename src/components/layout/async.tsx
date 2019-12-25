import React from 'react';
import Loadable from 'react-loadable';
import { Common } from '../../interface/common';

const LoadingComponent = ()=>{
  return <div>loading</div>
}

export default (loader: Common, loading=LoadingComponent) =>{
  return Loadable({
    loader,
    loading
  })
}