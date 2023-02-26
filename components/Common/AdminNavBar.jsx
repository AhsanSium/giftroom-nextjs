import React, { useState } from 'react';
import userImage from '../../public/Assets/Images/icons8-user-96.png';
import { useUser } from '@auth0/nextjs-auth0';


const AdminNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar bg-base-400">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{user ? user.name : "User"}</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user ? user.picture : userImage.src} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between" href='/'>
                Home

              </a>
            </li>
            <li>
              <a className="justify-between" href='/ico'>
                ICO

              </a>
            </li>
            <li>
              <a className="justify-between" href='/dashboard'>
                Dashboard
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              {!isLoading && !user && (
                <a href='/api/auth/login'>Login</a>
              )}
            </li>
            <li>
              {!isLoading && user && (
                <a href='/api/auth/logout'>Logout</a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default AdminNavBar;
