import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={enUS}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
