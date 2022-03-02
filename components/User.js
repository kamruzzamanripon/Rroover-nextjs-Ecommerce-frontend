import React from 'react';
import { useSelector } from 'react-redux';


const User = () => {
  const {address, city, mobile, user} = useSelector(state=> state.userInfo.authInfo)
    return (
        <div className='container text-center ml-auto mr-auto tab'>
            <div className="table-responsive">
                <table className="table table-striped">
                    <tr>
                        <th>Name</th>
                        <td>{user?.name}</td>
                    </tr>
                    <tr>
                        <th>address</th>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>Mobile</th>
                        <td>{mobile}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default User;