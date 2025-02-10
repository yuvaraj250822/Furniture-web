import './navbar.css'
import logo from './logo.png'
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

function Navbar(){

    let nav = ['Home', 'Category','Featured Products',' Shop Promise']
    let sidenav = ['Home', 'Category','Featured Products',"Shop Promise"  ]
      const [isOpen, setIsOpen]=useState(false)

      function togglemenu(){
        setIsOpen(!isOpen)
      }
    return(
       <div>
          <nav>
            <div className='img'>
                <img src={logo} alt="" />
                <p>Comfy Sloth</p>
            </div>
            <div className='list'>
              {nav.map((nav,index) => <li key={index}>
              <a href="">{nav}</a></li>)}
            </div>
            <div>
              <FaSearch className='search'/> 
              <IoCartOutline  className='cart'/>
            </div>  
               <IoReorderThreeOutline onClick={togglemenu} className='menu'/>
          </nav>

          <div className='sidenav-wrap'>
            <div className={isOpen? "sidenav active": "sidenav"}>
              <IoMdClose onClick={togglemenu} className='close' /> 
              {sidenav.map((sidenav,index) => <li key={index} >
              <a href="" >{sidenav}</a></li>)}

              <div >
                <a href="">
                <FaSearch className='side-icons' />
                </a>
                <a href="">
                 <IoCartOutline className='side-icons'/>
                </a>
                
              </div>
            </div>
          </div>
      
        </div>
        
      
    )
}

export default Navbar;