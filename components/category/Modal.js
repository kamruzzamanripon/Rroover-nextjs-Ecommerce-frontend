/* eslint-disable react/jsx-key */
import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import SmallImageOne from '../../public/images/1.png';
import SmallImageTwo from '../../public/images/2.png';
import SmallImageThree from '../../public/images/3.png';
import SmallImageFour from '../../public/images/4.png';
import SmallImageFive from '../../public/images/5.png';
import ModalMainImage from '../../public/images/product-2.png';



const ModalComponent = ({modal, setModal}) => {
    //const [modal, setModal] = useState(false);


    function toggleModal(e) {
      setIsOpen(!isOpen)
    }

    return (
        <>
        {/* <button className="button" onClick={() => setModal(true)}>Open simple modal</button> */}
      <PureModal
        //header="Your header"
        footer={
          <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>
        }
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        width="800px"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div className='flex'>
            <div className='w-1/2'>
                <div>
                    <Image src={ModalMainImage} className='rounded-xl' />
                </div>
                <div className='flex items-center'>
                    <Image src={SmallImageOne} />
                    <Image src={SmallImageTwo} />
                    <Image src={SmallImageThree} />
                    <Image src={SmallImageFour} />
                    <Image src={SmallImageFive} />
                </div>
            </div>

            <div className='w-1/2 ml-7'>
                
                <div>
                    <span className='text-xs text-gray-400 mr-5'>STATUS</span> <span className='text-xs bs-dark-green-color font-medium'>In Stock</span>
                    <h2 className='mt-3 text-gray-900 font-medium'>Product Full Name</h2>
                    <div className='flex items-center'>
                        {Array(5).fill().map((_, i)=>(
                            <StarIcon className='h-4 text-orange-300' />
                        ))}
                        &nbsp; &nbsp; <span className='text-xs text-gray-400'>10 reviews</span>
                    </div>
                </div>
             
                <div className='mt-5'>
                    <span className="font-bold text-xl mr-3">
                        $200.00
                    </span>
                    <del className="text-gray-400 mr-3">$300</del> <span className='text-xs text-gray-400'>(+15% vat included)</span>
                    <p className='text-sm mt-2'>20 Products sold in last 12 hours</p>
                </div>
                
                <hr className='my-5' />    
                
                <div className='my-5'>
                    <div className="flex  items-center text-4xl mb-8 mr-10">
                        <span className='text-xs mr-1'>QUANTITY</span> 
                        <button className="h-10 w-10 border border-gray-900 rounded-full ml-2"> - </button>
                        <span className="h-10 w-10 border rounded-full bg-gray-300 mx-2 text-center text-2xl font-medium leading-9"> 1 </span>
                        <button className="h-10 w-10 border border-gray-900 rounded-full mr-2"> + </button> 
                        <span className='text-xs text-gray-400'>Only 10 items left</span>
                    </div>
                </div>
            </div>
        </div>
      </PureModal>
      </>
    );
};

export default ModalComponent;