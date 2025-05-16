import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import CartPage from './pages/CartPage/CartPage';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/index';




function App() {

    return (

        <Provider store={store}>
                <div className='center'>
                    <Header />
                    {/* <Home /> */}
                    <Footer />
                </div >
        </Provider>






    );
}

export default App;