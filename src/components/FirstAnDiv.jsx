
import React from 'react';
import FirstVideo from './FirstVideo.mp4';
import FinguardImg1 from './Finguard img 1.png'; 
import FinguardImg2 from './Finguard img 2.png';  
import FinguardImg4 from './Finguard img 4.png';
import RoundedDetailsImg10 from './RoundedDetails img 10.png';
import FinguardLogo1 from './Finguard logo1.png';

import Moreby1img from './Moreby 1img.png';
import Moreby2img from './Moreby 2img.png';
import Moreby3img from './Moreby 3img.png';
import Moreby4img from './Moreby 4img.png';

import { FcLike } from "react-icons/fc";
import { BsSave2Fill } from "react-icons/bs";
import { FaShareAlt, FaCommentDots, FaInfoCircle } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestSquare } from "react-icons/fa";

function FirstAnDiv() {
  return (
    <div className="bg-white w-full min-h-screen p-8 flex flex-col items-center font-sans">
      {/* Header Section */}
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold">Finguard - Landing Page Website</h1>
      </div>

      {/* Subheader Section */}
      <div className="w-full max-w-4xl flex items-center justify-between mt-4">
        {/* Left Side: Designer Info */}
        <div className="flex items-center space-x-2">
          <img
            src="Finguard logo.png" 
            alt="Finguard Logo"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold">SlabPixel Designer for SlabPixel</p>
            <p className="text-xs text-green-600">Available for work</p>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="flex items-center space-x-9">
          <button className="flex items-center justify-end px-2 py-2 bg-white rounded-full border border-gray-700">
            <FcLike className='text-sm'/>
          </button>

          <button className="flex items-center justify-end px-2 py-2 bg-white rounded-full border border-gray-700 ml-2">
            <BsSave2Fill className='text-sm' />
          </button>

          <button className="px-5 py-3 bg-black text-white text-sm rounded-xl font-medium hover:bg-gray-800 transition">
            Get in touch
          </button>
        </div>
      </div>

      {/* Video Animation Section */}
      <div className="mt-8 w-full max-w-4xl bg-black flex justify-center">
        <video autoPlay loop muted className="w-full">
          <source src={FirstVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Sidebar */}
      <div className="fixed top-1/2 right-4 flex flex-col space-y-5">
        <button className="p-2 bg-white rounded-full border border-gray-700">
          <FaShareAlt className="text-gray-800 text-sm" />
        </button>
        <button className="p-2 bg-white rounded-full border border-gray-700 hover:bg-gray-100">
          <FaCommentDots className="text-gray-800 text-sm" />
        </button>
        <button className="p-2 bg-white rounded-full border border-gray-700 hover:bg-gray-100">
          <FaInfoCircle className="text-gray-800 text-sm" />
        </button>
      </div>

      {/* Preview Section */}
      <div>
        <h1 className='font-extrabold text-3xl mt-10'>Preview✨</h1>
      </div>

      {/* First Image */}
      <div className='mt-7 w-full flex max-w-4xl justify-center'>
        <img
          src={FinguardImg1} 
          alt="Finguard Preview"
          className="w-full" 
        />
      </div>
    
      {/* Mockup Section */}
      <div>
        <h1 className='font-extrabold text-3xl mt-10'>Mockup💻</h1>
      </div>

      {/* Image Section */}
      <div className='mt-7 w-full flex max-w-4xl justify-center'>
        <img
          src={FinguardImg2} 
          alt="Finguard"
          className="w-full mt-4"
        />
      </div>

      {/* Full Version Section */}
      <h1 className='font-extrabold text-3xl mt-10'>Full Version</h1>
      <div className='mt-7 w-full flex max-w-4xl justify-center'>
        <img
          src={FinguardImg4} 
          alt="Finguard Full Version"
          className="w-full mt-4"
        />
      </div>

      {/* The Main Paragraph Content */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <div className="text-left">
          <p className="text-2xl text-gray-700 mb-6 font-serif">
            Unlock your benefit to execute all your creative works with our best in-house designer, by simply subscribing!
          </p>
          <p className="text-xl font-extrabold text-gray-700 mb-6">
            Ready to give us a try? Visit <a href="https://slabpixel.com" className="text-2xl underline decoration-green-500 hover:decoration-green-700">slabpixel.com</a>
          </p>
          <p className="text-2xl font-serif text-gray-700 mb-6">
            Get in touch: <a href="mailto:hello@slabpixel.com" className="text-blue-500 text-xl underline hover:text-pink-700">hello@slabpixel.com</a>
          </p>
          <p className="font-serif text-gray-700 text-2xl mb-6">
            That's all! Feel free to leave us feedback and comment. Visit our social media: 
            <a href="#" className="text-blue-500 underline hover:text-pink-900 mx-1">Instagram</a>, 
            <a href="#" className="text-blue-500 underline hover:text-green-900 mx-1">Facebook</a>, 
            <a href="#" className="text-blue-500 underline hover:text-pink-900 mx-1">Twitter</a>, 
            <a href="#" className="text-blue-500 underline hover:text-pink-900 mx-1">LinkedIn</a>, and don't forget to follow us!
          </p>
        </div>
      </div>

      {/* The Rounded Details */}
      <div className='w-full mt-24 max-w-3xl mx-auto bg-gray-100 p-4 border rounded-lg flex items-center'>
        <a className='mr-4'>
          <img 
            src={RoundedDetailsImg10} 
            alt="Rounded Details"
            className="w-20 h-20 border rounded-lg"
          /> 
        </a>
        <div>
          <div className='Rebound-second text-gray-400 text-sm'>Rebound of</div>
          <div className='text-lg font-semibold text-gray-800'>
            Finguard - Social Media & Card Design
          </div>
          <div className='text-gray-600'>
            By SlabPixel Designer
          </div>
        </div>
      </div>

      {/* Centered Finguard Logo Section */}
      <div className='w-full mt-24 max-w-3xl mx-auto relative'>
        <span className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-300 w-72 h-0.5'></span> {/* Increased width */}
        <span className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-300 w-72 h-0.5'></span> {/* Increased width */}
        <a href="https://slabpixel.com" className='absolute inset-0 flex justify-center items-center'>
          <img
            src={FinguardLogo1}
            alt="Finguard Logo"
            className="rounded-full"
          />
        </a>
      </div>
      <a className='flex align items-center justify-center font-black font-serif text-xl mt-20'>SlabPixel</a>
      <div className='mt-2 font-serif text-sm font-sans font-light'>Efficient and High performing Team to execute All the Work</div>
    
      {/* The profile Image */}
      <div className='mt-14'>
        <button className="px-5 py-3 bg-black text-white text-sm rounded-3xl font-medium hover:bg-gray-800 transition">
          Get in touch
        </button>
      </div>


      <div className='w-full mt-20 max-w-4xl mx-auto'>
        <div className='flex justify-between items-center'>
          <h4 className='text-sm font-bold'>More by SlabPixel</h4>
          <a href="#" className='text-sm text-gray-500 hover:text-gray-700'>View All</a>
        </div>
        <div className='flex space-x-4 mt-4'>
          <img
            src={Moreby1img}
            alt="More by SlabPixel 1"
            className="w-1/4 h-auto rounded-lg"
          />
          <img
            src={Moreby2img}
            alt="More by SlabPixel 2"
            className="w-1/4 h-auto rounded-lg"
          />
          <img
            src={Moreby3img}
            alt="More by SlabPixel 3"
            className="w-1/4 h-auto rounded-lg"
          />
          <img
            src={Moreby4img}
            alt="More by SlabPixel 4"
            className="w-1/4 h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className='main-footer mt-72'>
        <div className='Pages-footer text-2xl font-bold italic text-gray-900 flex items-center justify-between w-full'>
          {/* Dribble Text on the Left */}
          <div className='dribble-start mr-10'>
            Dribble
          </div>
          {/* Centered List Items */}
          <ul className='flex justify-center gap-8 flex-grow'>
            <li className='font-serif text-sm'>For Designers</li>
            <li className='font-serif text-sm'>Hire talent</li>
            <li className='font-serif text-sm'>Inspiration</li>
            <li className='font-serif text-sm'>Advertising</li>
            <li className='font-serif text-sm'>Blog</li>
            <li className='font-serif text-sm'>About</li>
            <li className='font-serif text-sm'>Careers</li>
            <li className='font-serif text-sm'>Support</li>
          </ul>
          {/* Social Icons on the Right */}
          <div className='social-setup flex gap-6 ml-10'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook size={25} className="text-gray-900 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare size={25} className="text-gray-900 hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram size={25} className="text-gray-900 hover:text-pink-500" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestSquare size={25} className="text-gray-900 hover:text-red-500" />
            </a>
          </div>
        </div>
        <div className='footer-links flex justify-between mt-10'>
          {/* Left Section */}
          <div className='one-footer'>
            <ul className='flex gap-6'>
              <li className='text-sm'>© 2024 Dribble</li>
              <li className='text-sm'><a href="#">Terms</a></li>
              <li className='text-sm'><a href="#">Privacy</a></li>
              <li className='text-sm'><a href="#">Cookies</a></li>
            </ul>
          </div>
          {/* Center Section */}
          <div className='two-footer'>
            <ul className='flex gap-6'>
              <li className='text-sm'><a href="#">Jobs</a></li>
              <li className='text-sm'><a href="#">Designers</a></li>
              <li className='text-sm'><a href="#">Freelancers</a></li>
              <li className='text-sm'><a href="#">Tags</a></li>
              <li className='text-sm'><a href="#">Places</a></li>
              <li className='text-sm'><a href="#">Resources</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstAnDiv;


