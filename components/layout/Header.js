import Image from "next/image";
import Link from "next/link";
import React from "react";
import chevronDown from "../../public/images/chevron-down.png";
import Heart from "../../public/images/heart.png";
import MenuRight from "../../public/images/menu-right.png";
import Search from "../../public/images/search.png";
//Images
import UserPic from "../../public/images/user.png";
import u_percentage from "../../public/images/u_percentage.png";
import ShoppingBag from "../../public/images/u_shopping-bag.png";
import Logo from "../common/Logo";

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center py-6">
        
        <Logo />

        <div className="w-96">
          <div className="border border-gray-100 p-1 flex rounded-full items-center">
            <div className="min-w-max px-3">
              <Image src={Search} alt="" />
            </div>

            <input
              className="w-full px-3 py-1 focus:outline-none"
              type="search"
              placeholder="Search here...."
            />
            <button
              className="bg-gray-600  bs-button-bg px-6 rounded-full py-2 text-white"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>

        <div className="min-w-max flex items-center">
          <Link href="/">
            <a className="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <Image src={Heart} alt="" />
            </a>
          </Link>
          <Link href="/">
            <a className="relative bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <Image src={ShoppingBag} alt="" />
              <span className="absolute bg-red-600 w-4 h-4 top-0 right-0 rounded-full text-xs flex justify-center items-center text-white">
                0
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center">
              <span className="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
                <Image src={UserPic} alt="" />
              </span>
              <span>Account</span>
            </a>
          </Link>
        </div>
        
      </div>

      <div className="flex items-center">
            <div className="w-96">
                <div className="bs-dark-green-bg flex rounded-full px-4 cursor-pointer py-2">
                    <div className="min-w-max"><a><Image src={MenuRight} /></a></div>
                    <div className="w-full text-center px-6 text-white">All Caterories</div>
                    <div className="min-w-max"><a><Image src={chevronDown} /></a></div>
                </div>
            </div>

            <div className="w-full">
                <ul className="flex justify-center">
                    <li className="p-4"><Link href='/'>Home</Link></li>
                    <li className="p-4"><Link href='/'>Categories</Link></li>
                    <li className="p-4"><Link href='/'>About</Link></li>
                    <li className="p-4"><Link href='/'>Contact</Link></li>
                    <li className="p-4"><Link href='/'>FAQs</Link></li>
                    <li className="p-4"><Link href='/'>Offers</Link></li>
                </ul>
            </div>

            <div className="min-w-max bs-dark-orange-color flex">
                <Image src={u_percentage} /> <span className="mr-3">Special Offers!</span>
            </div>
        </div>
        
    </div>
  );
};

export default Header;
