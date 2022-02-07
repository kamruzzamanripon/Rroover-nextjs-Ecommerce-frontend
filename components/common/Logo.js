import Image from "next/image";
import Link from "next/link";
import React from 'react';
import BrandLogo from "../../public/logo.png";

const Logo = () => {
    return (
        <Link href="/">
        <a className="flex text-xs sm:font-size-32 font-medium items-center">
          <span className="hidden sm:block mr-2"><Image src={BrandLogo} /></span> 
          <span className="text-2xl ml-5 sm:text-4xl" >Bengal Shop</span>
        </a>
      </Link>
    );
};

export default Logo;