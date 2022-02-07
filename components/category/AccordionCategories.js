/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';



const AccordionCategories = () => {
    const [activeIndex, setActiveIndex] = useState(1);
   
    const questionsAnswers = [
        {
          question: "How many members can I invite?",
          answer:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        },
        {
          question: "What is the maximum upload size?",
          answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
        },
        {
          question: "How do I reset my password?",
          answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
        },
        {
          question: "Can I cancel my subscription?",
          answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
        },
        {
          question: "Do you provide additional support?",
          answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
        },
      ];

            
      return (
          
        <Accordion allowZeroExpanded>
                {
                questionsAnswers.map((item, index)=>(
                    <AccordionItem key={index} >
                        
                         <AccordionItemHeading className='relative'>
                             <AccordionItemButton className='accordion__button'>
                                 <h3 className='inline-block text-base'>{item.question}</h3>
                             </AccordionItemButton>
                         </AccordionItemHeading>

                         <AccordionItemPanel>
                                <Accordion allowZeroExpanded className='className="accordion__panel"'>
                                    <AccordionItem >
                                            
                                            <AccordionItemHeading className='relative'>
                                                <AccordionItemButton className='accordion__button sibling'>
                                                    <h3 className='inline-block text-sm'>{item.question}</h3>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    {item.answer}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem >
                                            <AccordionItemHeading className='relative'>
                                                <AccordionItemButton className='accordion__button sibling'>
                                                    <h3 className='inline-block text-sm'>{item.question}</h3>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p>
                                                    {item.answer}
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