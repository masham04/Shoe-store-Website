import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
    return (
        <div>
         <nav>
       <div class="logo">SHOE STORE</div>
      
            <label for="click" class="menu-btn">
                
            </label>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/product'>Products</Link></li>
            
          </ul>
          </nav>
   </div>
            
      
    )
}
