"use client";

import React from "react";
import ImageGalleryViewModel from "@/viewmodels/ImageGalleryViewModel";
import Link from "next/link";

const Gallery = () => {
  const imageGalleryViewModel = ImageGalleryViewModel();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const url = event.target.elements.url.value;
    imageGalleryViewModel.handleUpload(title, url);
    event.target.reset();
  };

  return (
    <div className=" h-full w-full bg-slate-200 text-[#151515]">
      <div className="container my-20 mx-auto">
        <div className="app-header flex flex-col">
          <h1 className="text-2xl font-bold uppercase mb-12">
            Image Gallery App
          </h1>
          <form onSubmit={handleFormSubmit} className="flex gap-4">
            <input type="text" name="title" placeholder="Image Title" />
            <input type="url" name="url" placeholder="Image URL" />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 rounded-md font-bold"
            >
              Upload Image
            </button>
          </form>
        </div>

        <div className="gallery flex flex-wrap gap-4 mt-10">
          {imageGalleryViewModel.images.map((image) => (
            <Link href={image.url} target="_blank">
              <div
                key={image.id}
                className="h-80 w-80 relative rounded-md border-4 border-gray-400"
              >
                <div className="title bg-[rgba(0,0,0,0.5)] w-full h-16 absolute left-0 bottom-0 flex items-center pl-4">
                  <h2 className="text-white text-xl font-semibold ">
                    {image.title}
                  </h2>
                </div>

                <img
                  src={image.url}
                  alt={image.title}
                  className="object-cover h-full w-full rounded-md"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
