import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return ( 
        <div className='home'>
            <h1>Welcome to the Home page</h1>
            <Link to='/about'>About</Link>
        </div>
     );
}

export default Home;