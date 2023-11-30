"use client";
import favicon from "../favicon.ico";
import Link from "next/link";
// MOZDA STAVITI POSITION FIXED PRODUSKUTOVATI
import Button from ".//UI/Button";
import { useState } from "react";
// import { Link } from "react-router-dom";
import AddModal from ".//UI/AddModal";
// import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function changeModal(e) {
    e.preventDefault();
    setActive((prev) => !prev);
  }

  return (
    <div
      className="
    text-gray-400 bg-gray-900 body-font
    "
    >
      <AddModal
        onChange={(e) => {
          changeModal(e);
        }}
        active={active}
      />
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image src={favicon} alt="Favicon" className="w-8 h-8" />
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link href="/feed/true" className="mr-5 hover:text-white">
            Predstojeci Mecevi
          </Link>
          <Link href="/feed/false" className="mr-5 hover:text-white">
            Prosli Mecevi
          </Link>
        </nav>
        <Button
          onClick={(e) => {
            changeModal(e);
          }}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          {loggedIn ? "Sign out" : "Log in"}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}
