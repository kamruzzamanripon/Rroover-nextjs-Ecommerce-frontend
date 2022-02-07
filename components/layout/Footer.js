import { } from '@heroicons/react/outline';
import Image from "next/image";
import React from "react";
import callCenter from "../../public/images/010-call-center 5.png";
import Support from "../../public/images/010-call-center 6.png";
import Payment from "../../public/images/010-call-center 7.png";
import PriceOffer from "../../public/images/010-call-center8.png";
import FooterBottom from './sort/FooterBottom';
import FooterMiddle from './sort/FooterMiddle';
import FooterTop from './sort/FooterTop';

const Footer = () => {
  return (
    <div>
      
      <FooterTop />

      <FooterMiddle />
      
      <FooterBottom />


      
    </div>
  );
};

export default Footer;
