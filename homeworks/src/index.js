import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './hw_4/App';

// hw5
// npm install react@latest react-dom@latest @reduxjs/toolkit react-redux
import { Provider } from 'react-redux';
// import { store } from './hw_5/store';
// import App from './hw_5/App';
import { store } from './hw_6/app/store';
import App from './hw_6/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>,
    // </React.StrictMode>,
);


