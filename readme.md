# init项目
### 1.创建文件夹并进入
```
mkdir react-family && cd react-family
```

### 2.填写项目基本信息
```
npm init
```

# webpack
### 之前没有安装过webpack的要进行全局安装
```
npm install webpack -g
```

### 1.安装webpack
```
npm install --save-dev webpack@3
```

### 2.编写基础配置文件webpack.dev.config.js
```
const path = require('path');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
};
```

### 3.新建文件入口并编写内容 ./src/index.js
```
document.getElementById('app').innerHTML = "Webpack works"
```

### 4.执行命令编译文件
```
webpack --config webpack.dev.config.js
```
生成了dist文件夹和bundle.js。


### 4.测试
新建文件./dist/index.html
```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<div id="app"></div>
<script type="text/javascript" src="./bundle.js" charset="utf-8"></script>
</body>
</html>
```
浏览器打开html可以看到Webpack works

# babel
> Babel 把用最新标准编写的 JavaScript 代码向下编译成可以在今天随处可用的版本。 这一过程叫做“源码到源码”编译， 也被称为转换编译。

通俗的说，就是我们可以用ES6, ES7等来编写代码，Babel会把他们统统转为ES5。

### 1.安装
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0
```

* babel-core 调用Babel的API进行转码
* babel-loader
* babel-preset-es2015 用于解析 ES6
* babel-preset-react 用于解析 JSX
* babel-preset-stage-0 用于解析 ES7 提案

### 2.新建babel配置文件 .babelrc
```
{
   "presets": [
     "es2015",
     "react",
     "stage-0"
   ],
   "plugins": []
}
```

### 3.修改webpack.dev.config.js，增加babel-loader
```
 /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
 /*cacheDirectory是用来缓存编译结果，下次编译加速*/
 module: {
     rules: [{
         test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     }]
 }
```

### 4.测试
修改src/index.js
```
 /*使用es6的箭头函数*/
 let func = (str) => {
     document.getElementById('app').innerHTML = str;
 };
 func('我现在在使用Babel!');
```

执行打包命令
```
webpack --config webpack.dev.config.js
```
打开浏览器刷新测试

# React
### 1.安装
```
npm install --save react react-dom
```

### 2.使用react，修改./src/index.js
```
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <div>Hello React!</div>, document.getElementById('app')
);
```

执行打包命令
```
webpack --config webpack.dev.config.js
```
打开浏览器刷新测试

### 3.优化，实现组件化
./src/component/Hello/Hello.js
```
import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello,React!
            </div>
        )
    }
}
```

修改./src/index.js
```
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello';

ReactDom.render(
    <Hello/>, document.getElementById('app'));
```

执行打包命令
```
webpack --config webpack.dev.config.js
```
打开浏览器刷新测试

# 命令优化
package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev-build": "webpack --config webpack.dev.config.js"
}
```

最后只要执行
```
npm run dev-build
```

# react-router
### 1.安装
```
npm install --save react-router-dom
```
### 2.新建文件
./src/pages/Home/Home.js
```
import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                这是home页
            </div>
        )
    }
}
```

./src/pages/Page1/Page1.js
```
import React, {Component} from 'react';

export default class Page1 extends Component {
    render() {
        return (
            <div>
                这是Page1页
            </div>
        )
    }
}
```

./src/router/router.js
```
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page1 from '../pages/Page1/Page1';


const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
```

### 3.修改入口文件
./src/index.js
```
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello';

import getRouter from './router/router';

ReactDom.render(
    getRouter(),
    document.getElementById('app')
);
```

执行命令还不能看到效果
```
npm run dev-build
```
需要配置web服务器

# webpack-dev-server
webpack-dev-server就是一个小型的静态文件服务器,为webpack打包生成的静态资源文件提供web服务

### 1.安装
```
npm install webpack-dev-server --save-dev

npm install webpack-dev-server -g
```

### 2.
webpack.dev.config.js
```
devServer: {
    contentBase: path.join(__dirname, './dist')
}
```

执行webpack-dev-server --config webpack.dev.config.js
可以直接在http://localhost:8080访问

### 3.简化命令
修改package.json
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev-build": "webpack --config webpack.dev.config.js",
    "start": "webpack-dev-server --config webpack.dev.config.js"
}
```

执行
```
npm start
```

其他配置
port：配置要监听的端口 默认8080
contentBase：URL的根目录。如果不设定的话，默认指向项目根目录
historyApiFallback：让所有的404定位到index.html
host 指定一个host,默认是localhost, 可以ip访问，同一个局域网内可以访问
webpack.dev.config.js
```
devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0'
}
```

package.json
```
"start": "webpack-dev-server --config webpack.dev.config.js --color --progress"
```

执行
```
npm start
```

# 模块热替换
现在修改代码的时候浏览器会自动刷新。
下面是实现修改内容后，浏览器只会刷新修改的那一块地方。

### 1.webpack热替换
package.json
```
"start": "webpack-dev-server --config webpack.dev.config.js --color --progress --hot"
```

src/index.js
```
import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

if (module.hot) {
    module.hot.accept();
}

ReactDom.render(
    getRouter(), document.getElementById('app')
);
```

执行可以在不刷新页面的情况下内容更新
```
npm start
```

但是state会被重置
src/pages/Home/Home.js
```
import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '小希希',
            age: 1,
        };
    }

    handleClick = () =>
        this.setState({
            age: this.state.age + 1,
        })

    render() {
        const { name, age } = this.state;
        return (
            <div>
                这是home页。<br />
                大家好我是{name}
                点它加一
                <button onClick={this.handleClick}>按钮</button>
                {age}<br />
                请仔细看哦state可以保存了哦
            </div>
        )
    }
}
```

### 2.解决模块热替换，state被重置的问题
安装依赖
```
npm install react-hot-loader@next --save-dev
```

.babelrc
```
{
  "presets": [
    "es2015",
    "react",
    "stage-0"
  ],
  "plugins": [
    "react-hot-loader/babel"
  ]
}
```

webpack.dev.config.js入口改变
```
entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
]
```

src/index.js
```
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import getRouter from './router/router';


const renderWithHotReload = (RootElement) => {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}

// 初始化
renderWithHotReload(getRouter());

// 热更新
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
```

执行npm start

# 文件路径优化
原来引用
```
import Home from '../pages/Home/Home';
```

改成
```
import Home from 'pages/Home/Home';
```

webpack.dev.config.js
```
resolve: {
    alias: {
        pages: path.join(__dirname, 'src/pages'),
        component: path.join(__dirname, 'src/component'),
        router: path.join(__dirname, 'src/router')
    }
}
```

然后涉及到的路径都可以改掉了

#redux
制作简单的计数器

### 1.安装redux
```
npm install --save redux
```

### 2.通过action创建函数
src/redux/actions/counter.js
```
/*action*/

export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
export const RESET = "counter/RESET";

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}
```

### 3.写reducer，reducer是一个纯函数，接收action和旧的state，生成新的state
src/redux/reducers/counter.js
```
import { INCREMENT, DECREMENT, RESET } from './../actions/counter';

/* 初始化state */
const initState = {
    count: 0
};

/* reducer */
export default function reducer (state = initState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
};
```

### 4.整合项目所有的reducers
src/redux/reducers.js
```
import counter from './reducers/counter';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action)
    }
}
```

### 5.创建一个store
store作用：
- 维持应用state
- 提供getState()方法获取state
- 提供dispatch(action)触发reducers方法更新state
- 通过subscribe(listener)注册监听器
- 通过subscribe(listener)返回的函数注销监听器

src/redux/store.js
```
import {createStore} from 'redux';
import combineReducers from './reducers.js';

let store = createStore(combineReducers);

export default store;
```

### 6.测试redux
src/redux/testRedux.js
```
import {increment, decrement, reset} from './actions/counter';

import store from './store';

// 打印初始状态
console.log(store.getState());

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// 发起一系列 action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

// 停止监听 state 更新
unsubscribe();
```

在redux文件夹下创建一个空build.js并执行命令
```
webpack testRedux.js build.js
```
在执行新生成的文件dist/main.js
```
node main.js
```


state的变化
```
{ counter: { count: 0 } }
{ counter: { count: 1 } }
{ counter: { count: 0 } }
{ counter: { count: 0 } }
```

### 7.搭配react使用redux
src/pages/Counter/Counter.js
```
import React, {Component} from 'react';

export default class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为(显示redux计数)</div>
                <button onClick={() => {
                    console.log('调用自增函数');
                }}>自增
                </button>
                <button onClick={() => {
                    console.log('调用自减函数');
                }}>自减
                </button>
                <button onClick={() => {
                    console.log('调用重置函数');
                }}>重置
                </button>
            </div>
        )
    }
}
```

### 8.增加路由
src/router/router.js
```
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import Counter from 'pages/Counter/Counter';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
```

### 9.安装react-redux
```
npm install --save react-redux
```

src/pages/Counter/Counter.js
```
import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter.count}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

### 10.传入store
src/index.js
```
import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';

import getRouter from 'router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('router/router').default;
        renderWithHotReload(getRouter());
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
```

### 11.查看效果
npm start查看
- Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。
- connect函数作用是从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props。

### 12.异步action
请求开始的时候，界面转圈提示正在加载。isLoading置为true。
请求成功，显示数据。isLoading置为false,data填充数据。
请求失败，显示失败。isLoading置为false，显示错误信息。

### 13.创建一个user.json，相当于后台的API接口
dist/api/user.json
```
{
  "name": "brickspert",
  "intro": "please give me a star"
}
```

### 13.action创建函数
src/redux/actions/userInfo.js
```
export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
```

### 14.创建reducer
src/redux/reducers/userInfo.js
```
import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from 'actions/userInfo';


const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.userInfo,
                errorMsg: ''
            };
        case GET_USER_INFO_FAIL:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}
```

### 15.组合reducer
```
import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: userInfo(state.userInfo, action)
    }
}
```

### 16.现在有了action，有了reducer，我们就需要调用把action里面的三个action函数和网络请求结合起来。

请求中 dispatch getUserInfoRequest
请求成功 dispatch getUserInfoSuccess
请求失败 dispatch getUserInfoFail

src/redux/actions/userInfo.js增加
```
export function getUserInfo() {
    return function (dispatch) {
        dispatch(getUserInfoRequest());

        return fetch('http://localhost:1267/api/user.json')
            .then((response => {
                return response.json()
            }))
            .then((json) => {
                    dispatch(getUserInfoSuccess(json))
                }
            ).catch(
                () => {
                    dispatch(getUserInfoFail());
                }
            )
    }
}
```

为了让action创建函数除了返回action对象外，还可以返回函数，我们需要引用redux-thunk。
```
npm install --save redux-thunk
```

### 17.组件验证
src/pages/UserInfo/UserInfo.js
```
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";

class UserInfo extends Component {

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);
```

### 18.增加路由
src/router/router.js
```
import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import Counter from 'pages/Counter/Counter';
import UserInfo from 'pages/UserInfo/UserInfo';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userinfo" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;
```

npm start查看效果

 

# combinReducers优化
src/redux/reducers.js
```
import {combineReducers} from "redux";

import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';


export default combineReducers({
    counter,
    userInfo
});
```

# 查看代码错在哪里
webpack.dev.config.js增加
```
devtool: 'inline-source-map'
```

# 编译css
### 1.安装
```
npm install css-loader style-loader
```
css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能；

style-loader将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。

### 2.webpack.dev.config.js rules增加
```
module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }]
},
```

### 3.随便在哪个页面加入样式进行测试


















[原文链接](https://github.com/brickspert/blog/issues/1#init)