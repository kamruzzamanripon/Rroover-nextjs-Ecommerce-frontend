import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Heart from "../../../public/images/heart.png";
import Search from "../../../public/images/search.png";
import Logo from "../../common/Logo";

const HeaderTop = () => {
    return (
        <div className="flex justify-between items-center py-6">
        
        <Logo />

        <div className="w-96 hidden sm:block">
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
          <Link href="/wishlist">
            <a className="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
              <Image src={Heart} alt="" />
            </a>
          </Link>
          
          
          {/* if loging true then show this component */}
          {/* <Link href="/">
            <a className="flex items-center">
              <span className="bs-icon-box rounded-full hover:bg-gray-200 inline-block flex items-center justify-center">
                <Image src={UserPic} alt="" />
              </span>
              <span>Account</span>
            </a>
          </Link> */}


          <Link href="/login">
            <a className="flex items-center">
              <span>Login</span>
            </a>
          </Link>
          <span> / </span>
          <Link href="/register">
            <a className="flex items-center">
              <span>Register</span>
            </a>
          </Link>
        </div>
        
      </div>
    );
};

export default HeaderTop;