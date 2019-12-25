import React from 'react';
import Async from '@/components/layout/async';

const Task = Async(()=>import('@/views/account/task'));
const approval = Async(()=>import('@/views/account/approval'));

export default [
  {
    path: '/approval',
    exact: true,
    component: approval
  },
  {
    path: '/task',
    exact: true,
    component: Task
  }
] 