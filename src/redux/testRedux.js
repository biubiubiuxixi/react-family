import { increment, decrement, reset } from 'actions/counter';

import store from './store';

// 打印初始状态
console.log(store.getState(), '---初始化---');

// 每次更新state时，打印日志
// 注意subsc 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState(), '查看注销时state')
);

// 发起一系列action
store.dispatch(increment());
// console.log(store.getState(), '---increment---');
store.dispatch(decrement());
// console.log(store.getState(), '---decrement---');
store.dispatch(reset());

// 注销监听
unsubscribe();