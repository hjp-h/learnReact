import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux'

ReactDOM.render(
      //为每一个容器组件提供store 
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'));

//引入了react-redux就不需要监听redux中状态的变化，因为容器已经connect(store,UI)了
//监听redux状态变化 重新渲染页面
// store.subscribe(() => {
//   ReactDOM.render(<App />,document.getElementById('root')
// );
//});

