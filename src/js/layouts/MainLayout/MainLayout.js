
import React from 'react';
import { Outlet } from "@tata1mg/router";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
