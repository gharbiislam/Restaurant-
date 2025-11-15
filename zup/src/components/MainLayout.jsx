import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
 return (
 <div>
 <Navbar ></Navbar>
 
 <main >
 {children}
 </main>
 <footer>
    <Footer></Footer>
 </footer>
 </div>
 );
};
export default MainLayout;