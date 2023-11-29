import React from 'react';
import Banner from '../banner/Banner';
import ChoseBlog from '../choseBlog/ChoseBlog';

const Home = () => {
    return (
        <div className='z-10'>
            <Banner></Banner> 
            <ChoseBlog></ChoseBlog>
        </div>
    );
};

export default Home;