"use client"
import { useState } from "react";
import "./navbar.css"
import close from "../../assets/images/close.png"
import { HiMenuAlt3 } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import BrandLogo from '@/utils/logo/logo';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
const [istoggle, setIsToggle]  = useState(false);
const isloggedis = true;
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <BrandLogo />
      </div>
      <div className="navbar_links">
        <a href="/">Home</a>
        <a href="/">Menu</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
        <div className="navbar_links-button">
          {isloggedis ? (
            <div className="navbar_links_loggedin">
              <p>Make an Order</p>
              <div className="navbar_line" />
              <Link href="/profile/tray">
                <p>Profile</p>
              </Link>
            </div>
          ) : (
            <Link href="/auth/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
      <div className="navbar_menu_buttons">
        {istoggle ? (
          // <GiCancel size={30} onClick={() => setIsToggle(false)} />
          <Image src={close} onClick={() => setIsToggle(false)} />
        ) : (
          <HiMenuAlt3 size={30} onClick={() => setIsToggle(true)} />
        )}
      </div>
      {istoggle ? (
        <div className="navbar_links-mobile">
          <div className="navbar_links-mobile_links">
            <a href="/">Home</a>
            <a href="/">Menu</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
          </div>
          <div className="navbar_links-mobile-button">
            {isloggedis ? (
              <div className="navbar_links-mobile_loggedin">
                <p>Make an Order</p>
                <div className="navbar_line" />
                <Link href="/profile/tray">
                  <p>Profile</p>
                </Link>
              </div>
            ) : (
              <Link href="/auth/login">
                <button>Login</button>
              </Link>
            )}
          </div>
        </div>
      ) : (
        <div style={{ display: "none" }} />
      )}
      <div className="navbar_tablet_loggedin">
        {istoggle ? (
          // <GiCancel size={30} onClick={() => setIsToggle(false)} />
          <Image src={close} onClick={() => setIsToggle(false)} />
        ) : (
          <IoPersonCircleSharp size={30} onClick={() => setIsToggle(true)} />
        )}
        {istoggle ? (
          <div className="navbar_links-tablet_loggedin">
            <p>Make an Order</p>
            {/* <div className="navbar_line" /> */}
            <Link href="/profile/tray">
              <p>Profile</p>
            </Link>
          </div>
        ) : (
          <div style={{ display: "none" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar