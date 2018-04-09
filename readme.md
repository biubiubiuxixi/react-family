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










[原文链接](https://github.com/brickspert/blog/issues/1#init)