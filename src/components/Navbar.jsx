/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import logo from '../images/logo.png'
import { Button } from '@mui/material';


const Navbar = () => {
    const [nav, setnav] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
            
    }
    window.addEventListener('scroll' , changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <a href="#" className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#" className=''> Key Features</a></li>
            <li><a href="#" className=''>Pricing</a></li>
            <li><a href="#" className=''>Testiminial</a></li>
            <li><a href="#" className=''>FAQ</a></li>
            <Button variant="contained" sx={{borderRadius: '24px' , fontSize:'12px' , backgroundColor:'#2500f9'}}>Try for free</Button>
        </ul>

      
    </nav>
  )
}

export default Navbar;
