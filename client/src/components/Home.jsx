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
        <div className="productcard">
          <section className="products"></section>
          <aside className="basket"></aside>
          <button className="nextpage"></button>
        </div>
      </main>
    </>
  );
}

export default Home;
