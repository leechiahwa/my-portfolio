"use client";
import React, { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I&apos;m Melvin.
            <br className="hidden lg:inline-block" /> I love to build amazing
            things.
          </h1>
          <p className="mb-8 leading-relaxed">
            With a passion for creating innovative and efficient software
            solutions, I thrive on turning ideas into reality. Whether it&apos;s
            crafting seamless applications, optimizing systems, or developing
            cutting-edge technology, I’m dedicated to delivering excellence and
            value in every project.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            {/* Likes button */}
            <button
              className="ml-4 inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg items-center"
              onClick={handleCount}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 mr-4 "
              >
                <path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
              </svg>
              {count > 1 ? "Likes" : "Like"} {count}{" "}
              {"❤️".repeat(Math.floor(count / 10))}
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./IMG_4787.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
