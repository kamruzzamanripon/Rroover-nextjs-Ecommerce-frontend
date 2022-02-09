import React, { Fragment, useState } from "react";

const AlterShippingInfo = () => {
  const [alterShipping, setAlterShipping] = useState(false);
  //console.log(alterShipping)
  return (
    <Fragment>
      <label className="block mb-1 mt-5 flex justify-between">
        <span>
          <input type="checkbox" className="cursor-pointer mr-2" 
            onChange={()=>setAlterShipping(!alterShipping)}
          />
          Alter Shipping
        </span>
      </label>

      <div className={`${alterShipping ? "block" : "hidden"}`}>
        <label className="block mr-5">
          <span className="block text-sm font-medium text-slate-700">Name</span>

          <input
            type="text"
            placeholder="username or email"
            className="input-box"
          />
        </label>

        <label className="block mr-5 my-5">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>

          <input
            type="text"
            placeholder="email"
            className="input-box"
          />
        </label>

        <label className="block mr-5">
          <span className="block text-sm font-medium text-slate-700">
            Address
          </span>

          <textarea
            placeholder="Address"
            className="input-box"
          />
        </label>

        <label className="block mr-5 my-5">
          <span className="block text-sm font-medium text-slate-700">
            Mobile
          </span>

          <input
            type="text"
            placeholder="Mobile"
            className="input-box"
          />
        </label>
      </div>
    </Fragment>
  );
};

export default AlterShippingInfo;
