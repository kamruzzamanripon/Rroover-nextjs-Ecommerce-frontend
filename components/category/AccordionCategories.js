/* eslint-disable react/jsx-key */
import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



const AccordionCategories = () => {
                  
      return (
          
        <Accordion allowZeroExpanded>
                {
                Array(6).fill().map((item, index)=>(
                    <AccordionItem key={index} >
                        
                         <AccordionItemHeading className='relative'>
                             <AccordionItemButton className='accordion__button'>
                                 <h3 className='inline-block text-base'>Fruits</h3>
                             </AccordionItemButton>
                         </AccordionItemHeading>

                         <AccordionItemPanel>
                                <Accordion allowZeroExpanded className='className="accordion__panel"'>
                                    <AccordionItem >
                                            
                                            <AccordionItemHeading className='relative'>
                                                <AccordionItemButton className='accordion__button sibling'>
                                                    <h3 className='inline-block text-sm'>Local Furits</h3>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                   Fresh Fruits
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem >
                                            <AccordionItemHeading className='relative'>
                                                <AccordionItemButton className='accordion__button sibling'>
                                                    <h3 className='inline-block text-sm'>Foreign Furites</h3>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                   Fresh Fruits
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                </Accordion>

                         </AccordionItemPanel>


                     </AccordionItem>
                )) 
             }
        </Accordion>
      );
    
};

export default AccordionCategories;