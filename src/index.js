import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/APP/APP';


const renderWithHotReload = (RootElement) => {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}

// 初始化
renderWithHotReload(App);

// 热更新
if (module.hot) {
    module.hot.accept('components/APP/APP', () => {
        const NextApp = require('components/APP/APP').default;
        renderWithHotReload(NextApp);
    });
}