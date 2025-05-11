import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from './hw_4/App';

// hw5
// npm install react@latest react-dom@latest @reduxjs/toolkit react-redux
import { Provider } from 'react-redux';
// import { store } from './hw_5/store';
// import App from './hw_5/App';

// hw6
// import { store } from './hw_6/app/store';
// import App from './hw_6/App';

// hw7
// import App from './hw_7_Thunk/App';
// import { store } from './hw_7_Thunk/app/store';
// import './index.css';

// hw8
import App from './hw_8_All_knowl_Project/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* // <Provider store={store}> */}
            <App />
        {/* // </Provider>, */}
    </React.StrictMode>,
);


