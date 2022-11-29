import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sourceImage from '../../public/images/default-image.jpg';
import {AiOutlinePlus} from 'react-icons/ai';
import { BiPencil } from "react-icons/bi";
import startIcon from '../../public/images/star.svg'

const AccountInfo = (props:any) => {
  return (
    <div className='py-16 pl-16  flex justify-between w-full'>
      <div className='md:w-[20%] min-w-[180px]'>
        <div className='relative'>
          <Image
            src={sourceImage}
            width={180}
            height={180}
            alt='Icon'
            className='rounded-lg'
          />
          <button className="absolute ml-[40px] -mt-5 font-comfortaa bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-[12px] shadow">
            Change
          </button>
        </div>
      </div>
      <div className='px-8 item-left w-full '>
        <div>
          <p className='font-unica text-[30px] py-5'>PROFILE NAME</p>
          <p className='font-comfortaa'>Short profile introduction, this is dummy placeholder text to fill out this text box --- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor sem, tincidunt et bibendum non, convallis eget mauris. Suspendisse in gravida lorem. Nulla massa enim, ultricies at dictum non, placerat vel tellus. </p>
        </div>
        <div className='py-8'>
          <p className='font-unica text-[25px]'>PROFILE RATING</p>
          <div className='items-center flex'>
            <Image src={startIcon} alt={'Icon'}/>&nbsp;
            <Image src={startIcon} alt={'Icon'}/>&nbsp;
            <Image src={startIcon} alt={'Icon'}/>&nbsp;
            <Image src={startIcon} alt={'Icon'}/>&nbsp;
            <Image src={startIcon} alt={'Icon'}/>&nbsp;
            &nbsp; 4.6&nbsp; &nbsp; |&nbsp; &nbsp;  
            <p className='font-comfortaa'> 27 ratings</p>
          </div>
        </div>
        <div className='py-8'>
          <p className='font-unica text-[25px]'>TOTAL EARNING</p>
          <div className='flex items-center'>
            <p className='font-unica text-[30px]'>$4K+&nbsp; &nbsp; </p>
            <p className='font-comfortaa'>| &nbsp; 63 items sold</p>
          </div>
        </div>
        <div className='py-8'>
          <p className='font-unica text-[25px]'>PROFILE CONTACT</p>
          <div className='flex items-center'>
            <p className='text-gray-700 text-[15px] min-w-[150px]'>EMAIL </p>
            <p className='font-comfortaa'>thisismyemail@mail.com</p>
          </div>
          <div className='flex items-center'>
            <p className='text-gray-700 text-[15px] min-w-[150px]'>PHONE NUMBER </p>
            <p className='font-comfortaa'>+1234567890</p>
          </div>
        </div>

      </div>
      <div className='md:w-[20%] min-w-[250px]'>
        <div>
          <button className="hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa flex items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-[12px] shadow">
            <AiOutlinePlus className='text-[20px]'/> &nbsp;LIst new Product
          </button>
        </div>
        <div>
        <button className="hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa flex items-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-[12px] shadow mt-5">
            <BiPencil className='text-[20px]'/> &nbsp;Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
