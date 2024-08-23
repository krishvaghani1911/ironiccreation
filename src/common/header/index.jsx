import React from 'react'
import './header.scss'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import logo from '../../assets/logo/ironlogo.avif'
import categoryApi from '../../categoryApi/categoryApi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

const categoryNames = categoryApi;


export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };            

    return (
        <div className="header">
            <div className={`sidenav ${isNavOpen ? 'open' : ''}`}>
                <div className="closebtn" onClick={closeNav}>&times;</div>
                <Link className="menu-item" to={"/"}>Home</Link>
                <div className='menu-item category' onClick={toggleDropdown} >Category<FaCaretDown /></div>
                <div className={`dropdown-category ${dropdownOpen ? 'open' : ''}`}>

                    {
                        categoryNames.map((item, index) => {
                            return (
                                <Link to={item.path} key={index} onClick={closeNav}>{item.category}</Link>
                            )
                        })
                    }
                </div>
                <Link className="menu-item" to={"/shop"} onClick={closeNav}>Shop</Link>
                <Link className="menu-item" to={"/profile"} onClick={closeNav}>Profile </Link>
            </div>


            <div className="container">
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                </div>
                <div className="nav">
                    {
                        categoryNames.map((i) => (
                            // <Link t href="#">{i.category}</Link>
                            <Link to={i.path}>{i.category}</Link>
                        ))
                    }
                </div>
                <div className="menu">
                    <IoSearch className='icon' />
                    <FaRegHeart className='icon' />
                    <HiOutlineShoppingBag className='icon' />
                </div>
            </div>
        </div>
    )
}
