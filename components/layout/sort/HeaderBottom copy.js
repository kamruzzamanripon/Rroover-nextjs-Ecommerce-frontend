import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import chevronDown from "../../../public/images/chevron-down.png";
import MenuRight from "../../../public/images/menu-right.png";
import u_percentage from "../../../public/images/u_percentage.png";

const HeaderBottom = () => {
    const [allCategoryMenu, setAllCategoryMenu] = useState(false)
    //console.log(allCategoryMenu)
    return (
        <div>
            <div className="flex-wrap flex items-center sm:flex-nowrap">
            <div className="w-10 mr-5 sm:w-96 relative">
                <div className="bs-dark-green-bg flex rounded-full px-4 cursor-pointer py-2 relative z-20" onClick={()=>setAllCategoryMenu(!allCategoryMenu)}>
                    <div className="-ml-5 sm:ml-0 min-w-max"><a><Image src={MenuRight} /></a></div>
                    <div className="hidden sm:block w-full text-center px-6 text-white">All Caterories</div>
                    <div className="min-w-max"><a><Image src={chevronDown} /></a></div>
                </div>

                <div className={`${allCategoryMenu ? 'blog visible' : 'hidden invisible'}  absolute bs-dark-green-bg z-10 w-full -mt-5 pt-6 pb-4 rounded-b-2xl`}>
                    <ul>
                        <li className='block text-white py-2 px-4'><Link href="/" >Fruits</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Vegetables</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                        <li className='block text-white py-2 px-4'><Link href="/">Lorem ispum caosel</Link></li>
                    </ul>
                </div>
                
            </div>

            <div className="w-full">
                <ul className="flex justify-center">
                    <li className="p-4"><Link href='/'>Home</Link></li>
                    <li className="p-4"><Link href='/category'>Categories</Link></li>
                    <li className="p-4"><Link href='/'>About</Link></li>
                    <li className="p-4"><Link href='/'>Contact</Link></li>
                    <li className="p-4"><Link href='/'>FAQs</Link></li>
                    <li className="p-4"><Link href='/'>Offers</Link></li>
                </ul>
            </div>

            <div className="flex min-w-max bs-dark-orange-color">
                <Image src={u_percentage} /> <span className="mr-3">Special Offers!</span>
            </div>
        </div>
        </div>
    );
};

export default HeaderBottom;