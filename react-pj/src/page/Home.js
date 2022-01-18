import React, { Fragment } from 'react';
import HomeView from './Home/HomeView';
import HomeCon from './Home/HomeCon';
import HomeNews from './Home/HomeNews';

function Home() {
  return (
    <Fragment>      
      <HomeView />
      <HomeCon />
      <HomeNews />      
    </Fragment>
  )
}

export default Home
