import React from 'react';
import './Home.scss';
import Timantanshort from '../Buttons/Timantanshort';
import Login from '../Buttons/Login';
import Registration from '../Buttons/Registration';
import Triangle from '../Buttons/Triangle';
function Home() {
  return (
    <>
      <main className="main_menu">
        <header className="header">
          <Timantanshort />
          <Triangle />
          <Login />
          <Registration />
        </header>
      </main>
    </>
  );
}

export default Home;
