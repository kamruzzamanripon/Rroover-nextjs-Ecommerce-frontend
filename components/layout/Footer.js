import Image from "next/image";
import Link from "next/link";
import React from "react";
import callCenter from "../../public/images/010-call-center 5.png";
import Support from "../../public/images/010-call-center 6.png";
import Payment from "../../public/images/010-call-center 7.png";
import PriceOffer from "../../public/images/010-call-center8.png";
import AppleBadge from "../../public/images/Apple badge.png";
import PaymentType from '../../public/images/Frame 1171274604.png';
import PlayStore from "../../public/images/Play store badge.png";
import Logo from "../common/Logo";
import {} from '@heroicons/react/outline'

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="flex -mx-4 mb-10">
          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={callCenter} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">24 Customer Support</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={Support} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Authentic Products</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={Payment} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Secure Payment</h3>{" "}
              Contact us 24 hours
            </div>
          </div>

          <div className="w-1/4 px-4 flex items-center">
            <div className="min-w-max mr-4">
              <Image src={PriceOffer} />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-medium mb-2">Best Prices & Offers</h3>{" "}
              Contact us 24 hours
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="container">
          <div className="flex">
            <div className="w-3/5 pr-10">
              <Logo />

              <p className="my-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid culpa voluptatum consequuntur harum aliquam. Ab odio
                doloremque tempore perspiciatis corrupti dicta minima iure
                aliquid obcaecati?
              </p>

              <div>
                <a className="mr-4" href="" target="_blank">
                  <Image src={PlayStore} />
                </a>
                <a href="" target="_blank">
                  <Image src={AppleBadge} />
                </a>
              </div>
            </div>

            <div className="w-1/5 pl-6">
              <h3 className="text-2xl mb-6">About Us</h3>
              <ul className="leading-loose">
                <li>
                  <Link href="/">About Karte</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/">Category</Link>
                </li>
              </ul>
            </div>

            <div className="w-1/5 pl-6">
              <h3 className="text-2xl mb-6">About Us</h3>
              <ul className="leading-loose">
                <li>
                  <Link href="/">About Karte</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Career</Link>
                </li>
                <li>
                  <Link href="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/">Category</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-10">
        <div className="container">
          <div className="flex items-center ">
           
            <div className="w-1/3">
              
            </div>
            
            <div className="w-1/3 text-center">@2022 Copyright All Right Reserved by Bengal Shop</div>
            
            <div className="w-1/3 text-right">
              <Image src={PaymentType} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
