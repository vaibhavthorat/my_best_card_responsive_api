import React, { useEffect, useState } from 'react'
import myImage from './5.png';
import './Style.css';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const MyBestResponsiveCard = () => {
    const [product,setProduct]=useState([]);
    
    useEffect(() => {
        getProduct();
        Aos.init({duration:3000});
      },[]);

    const getProduct=()=>{
        axios.get('https://fakestoreapi.com/products').then((response)=>{
            setProduct(response.data);
        })
    }
  return <>
    <h1>This is Best Card Example by Using AOS, Axios, CSS</h1>
    <div className="container">
    {product.map((item,i) => (
            <div key={i}className="cart1" data-aos="zoom-in">
            <center><img src={item.image} data-aos="flip-right" alt="Wedding shoot" title="wedding"/></center>
            <h4 data-aos="fade-left">{item.title}</h4>
            <p data-aos="fade-right">{item.category}</p>
            <p data-aos="fade-right">Price:- ${item.price}</p>
            </div>
        ))}
			
    </div>            
  </>
}
