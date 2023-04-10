import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className='mt-20'>
        
        <div className='flex justify-around'>
          <div className='flex flex-col'>
            <div>Dream Job</div>
         
          </div>
<div>
    <p>Company</p>
</div>
<div>
    <p>Product</p>
</div>
<div>
    <p>Support</p>
</div>
<div>
    <p>Contact</p>
</div>
        </div>
      </footer>
    );
};

export default Footer;