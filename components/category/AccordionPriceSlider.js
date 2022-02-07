import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import PriceSlider from "./PriceSlider";

const AccordionPriceSlider = () => {
  return (
    <Accordion preExpanded={['a']} allowZeroExpanded className="mt-8">
      <AccordionItem uuid="a">
        <AccordionItemHeading className='relative'>
          <AccordionItemButton className='accordion__button'>
            <h3>Price</h3>
          </AccordionItemButton>
        </AccordionItemHeading>
          <AccordionItemPanel>

              <PriceSlider />
              
          </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionPriceSlider;
