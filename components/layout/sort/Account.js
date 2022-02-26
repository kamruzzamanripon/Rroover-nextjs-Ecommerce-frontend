import Link from 'next/link';
import React from 'react';

const Account = () => {
    return (
        <Link href="/user">
        <a className="flex items-center">
          <span>Account</span>
        </a>
      </Link>
    );
};

export default Account;