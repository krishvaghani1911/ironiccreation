import React from 'react'
import './footer.scss'
import { IoMailOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contact">
          <h2>Let's get in touch</h2>
          <p>Sign up for our newsletter and receive 10% off your order</p>
          <div className="input">
            <IoMailOutline className='icon1'/>
            <input type="text" placeholder='Enter your email'/>
            <FaArrowRight className='icon2'/>
          </div>
        </div>
        <div className="information">
          <h3>Information</h3>
          <a href="">Anout Us</a>
          <a href="">Refund & Exchanges</a>
          <a href="">Shipping & Delivery</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms & Conditions</a>
          <a href="">Contact Us</a>
        </div>
        <div className="collabration">
          <h3>Collabration</h3>
          <a href="">Top</a>
          <a href="">Dresses</a>
          <a href="">Kurta</a>
          <a href="">Jump Suit</a>
          <a href="">Gown</a>
          <a href="">Lehenga Choli</a>
          <a href="">Saree</a>
        </div>
        <div className="media">
          <h2>Our Social Media</h2>
          <p className='p1'>Address : Plot no: 263, 264 Bhagyoday Industries, Near Aai Mata Road, Beside Raghuveer Textile Mall, Surat, Gujarat 395010, India.</p>
          <p className='p2'>+91 7990256434</p>
          <p className='p3'>hello@ironiccreation.com</p>
          <div>
            <div className="icon1"><FaFacebook /></div>
            <div className="icon2"> <FaInstagram /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
