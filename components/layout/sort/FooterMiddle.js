import { } from '@heroicons/react/outline';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppleBadge from "../../../public/images/Apple badge.png";
import PlayStore from "../../../public/images/Play store badge.png";
import Logo from "../../common/Logo";

const FooterMiddle = () => {
    return (
        <div className="bg-gray-200 py-10">
        <div className="container">
          <div className="text-center sm:text-left sm:flex items-center justify-center">
                          
              <div className="w-full sm:w-3/5 pr-10">
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

              <div className="w-full sm:w-1/5 pl-6">
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

              <div className="w-full sm:w-1/5 pl-6">
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
    );
};

export default FooterMiddle;