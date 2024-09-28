import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
export const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtual Build Tools{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          For Developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="py-3 px-4 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 mx-3"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 border rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10 ">
        <video
          src={video1}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          autoPlay
          loop
          muted
        ></video>
        <video
          src={video2}
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};
