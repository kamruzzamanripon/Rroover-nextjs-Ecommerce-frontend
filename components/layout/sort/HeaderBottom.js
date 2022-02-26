import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chevronDown from "../../../public/images/chevron-down.png";
import MenuRight from "../../../public/images/menu-right.png";
import u_percentage from "../../../public/images/u_percentage.png";
import { userInfo } from "../../../store_slices/data_fetch/userPageFetch";

const HeaderBottom = () => {
  const [allCategoryMenu, setAllCategoryMenu] = useState(false);

  const {categoryItems} = useSelector(state=>state.homePageItems.categories)
  const userallInfo = Cookies.get('user_info'); 
  const userInfoParse = userallInfo ? JSON.parse(userallInfo) : '';
  const userId = userInfoParse.id

  const dispatch = useDispatch();

  const userHandle = (e)=>{
    e.preventDefault();
    dispatch(userInfo())
  }
  //console.log(categoryItems)
  return (
    <div className="mb-10">
      <div className=" flex items-center ">
        <div className="w-10 mr-5 sm:w-96 relative">
          <div
            className="bs-dark-green-bg flex rounded-full px-4 cursor-pointer py-2 relative z-20"
            onClick={() => setAllCategoryMenu(!allCategoryMenu)}
          >
            <div className="-ml-5 sm:ml-0 min-w-max">
              <a>
                <Image src={MenuRight} />
              </a>
            </div>
            <div className="hidden sm:block w-full text-center px-6 text-white">
              All Caterories
            </div>
            <div className="min-w-max">
              <a>
                <Image src={chevronDown} />
              </a>
            </div>
          </div>

          <div
            className={`${
              allCategoryMenu ? "blog visible" : "hidden invisible"
            } absolute w-100% whitespace-nowrap px-5 sm:w-full bs-dark-green-bg z-10 -mt-5 pt-6 pb-4 rounded-b-2xl`}
          >
           
            <ul>
              {categoryItems.length > 0 && (
                categoryItems.map((item,index)=>(
                  <li key={index} className="block text-white py-2 px-4 transition ease-out duration-100 hover:text-gray-700 hover:font-bold">
                  <Link href={`/category/${item.id}`}>{item.name}</Link>
                </li>
                ))
              )}
            </ul>

          </div>
        </div>

        <div className="sm:w-full">
          <ul className="flex justify-center">
            <li className="p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="hidden sm:block p-4">
              <Link href="/" >About</Link>
            </li>
            <li className="hidden sm:block p-4">
              <Link href="/private">Contact</Link>
            </li>
            <li className="hidden sm:block p-4">
              <Link href="/">FAQs</Link>
            </li>
            <li className="p-4">
              <Link href="/">Offers</Link>
            </li>
            <li className="hidden sm:block p-4">
              <Link href="/user" onClick={(e)=> userHandle(e)}>UserInfo</Link>
            </li>
          </ul>
        </div>

        <Link href="/">
          <div className="min-w-max bs-dark-orange-color flex items-center cursor-pointer">
            <Image src={u_percentage} />{" "}
            <span className="mr-3">Special Offers!</span>
          </div>
        </Link>    
        
      </div>
    </div>
  );
};

export default HeaderBottom;
