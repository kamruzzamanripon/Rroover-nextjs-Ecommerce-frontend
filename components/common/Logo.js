import Image from "next/image";
import Link from "next/link";
import React from 'react';
import BrandLogo from "../../public/logo.png";

const Logo = () => {
    return (
        <Link href="/">
        <a className="flex text-xs sm:font-size-32 font-medium items-center">
          <Image src={BrandLogo} className="mr-3" /> <span>Bengal Shop</span>
        </a>
      </Link>
    );
};

export default Logo;