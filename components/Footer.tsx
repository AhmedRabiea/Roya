import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col bg-bunker text-white py-4 mt-36">
      <div className="container mx-auto border-b-2 pb-2">
        <div className="flex items-center justify-between gap-5">
          <Link href="/">
            <img
              src="../assets/imgs/logo.svg"
              alt="Roya-Logo"
              className="w-36"
            />
            <p>
              A new way to organize and develop
              <br /> your business
            </p>
          </Link>
          <ul className="text-center">
            <h1 className="text-base underline font-bold">Usefuel Links</h1>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>About Us</li>
            </Link>
            <Link href="/">
              <li>Features</li>
            </Link>
            <Link href="/">
              <li>Solutions</li>
            </Link>
          </ul>
          <ul className="text-center">
            <h1 className="font-bold text-base underline">Community</h1>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>About Us</li>
            </Link>
            <Link href="/">
              <li>Features</li>
            </Link>
            <Link href="/">
              <li>Solutions</li>
            </Link>
          </ul>
          <ul className="text-center">
            <h1 className="font-bold text-base underline">Partner</h1>
            <Link href="/">
              <li>Our Parnter</li>
            </Link>
            <Link href="/">
              <li>Become One Of Our Partners</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="container mx-auto pt-4">
        <div className="flex justify-between">
          <p>Ro&apos;ya© All rights reserved Copyrights 2024</p>
          <div className="flex gap-4 items-center text-xl">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
