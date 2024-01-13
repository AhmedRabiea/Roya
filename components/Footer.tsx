import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col bg-bunker text-white py-4 mt-36">
      <div className="container mx-auto border-b-2 flex flex-col gap-5">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-0 items-center pb-7">
          <div className="col-span-1 flex flex-col gap-2">
            <Link href="/">
              <img
                src="../assets/imgs/logo.svg"
                alt="Roya-Logo"
                className="w-36"
              />
            </Link>
            <p>
              A new way to organize and develop
              <br /> your business
            </p>
          </div>
          <ul className="">
            <h1 className="underline text-2xl lg:text-4xl">Partner</h1>
            <Link href="/">
              <li>Our Parnter</li>
            </Link>
            <Link href="/">
              <li>Become One Of Our Partners</li>
            </Link>
          </ul>
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl lg:text-4xl">Ro&apos;ya News Letter</h1>
            <div className="flex gap-2">
              <Input placeholder="Enter Your Email" />
              <Button variant="getStarted">Subscribe</Button>
            </div>
            <p className="text-gray-300">
              By Subscribing, you agree to our Privacy Policy
            </p>
            <div className="flex gap-2 md:gap-4 items-center text-xl md:text-2xl">
              <div className="border-2 rounded-lg border-white/90 p-2">
                <FaFacebook />
              </div>
              <div className="border-2 rounded-lg border-white/90 p-2">
                <FaLinkedin />
              </div>
              <div className="border-2 rounded-lg border-white/90 p-2">
                <FaGithub />
              </div>
              <div className="border-2 rounded-lg border-white/90 p-2">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-4 text-center">
        <p>Ro&apos;ya© All rights reserved Copyrights 2024</p>
      </div>
    </div>
  );
};

export default Footer;
