import { MenuAlt3Icon, ViewGridIcon } from "@heroicons/react/solid";
import React from 'react';

const CategoryTitleOther = ({setDisplayStyle}) => {
    return (
        <div className="my-8">
            <div>
                <h2 className='font-bold text-4xl'>Fruits Collection</h2>
            </div>

            <div className='lg:flex items-center'>
                <div className='lg:w-1/2'>
                    <span>Fruits</span> |
                    <span> Green Fruits</span> |
                    <span> Fresh Fruits</span>
                </div>

                <div className='lg:w-1/2 flex items-center justify-between lg:justify-end'>
                    <span>20 Products Found</span> &nbsp; &nbsp;
                    <span ><MenuAlt3Icon onClick={()=>setDisplayStyle('menu')} className="h-8 cursor-pointer" /></span> &nbsp; &nbsp;
                    <span ><ViewGridIcon onClick={()=>setDisplayStyle('grid')} className="h-8 cursor-pointer" /></span>  &nbsp;

                    <select name="" id="">
                        <option value="">Default Sorting</option>
                        <option value="">ASC Sorting</option>
                        <option value="">DESC Sorting</option>
                    </select>
                </div>
            </div>

        </div>
    );
};

export default CategoryTitleOther;