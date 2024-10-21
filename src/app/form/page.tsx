"use client";

import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    brief: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-100   text-white">
      <div className="w-full max-w-md p-6  bg-[#12191B] rounded-lg shadow-md relative">
        <button className="absolute top-4 right-4 text-white">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="fi_1617543" clip-path="url(#clip0_1100_2117)">
              <path
                id="Vector"
                d="M16 32C7.17749 32 0 24.8225 0 16C0 7.17749 7.17749 0 16 0C24.8225 0 32 7.17749 32 16C32 24.8225 24.8225 32 16 32ZM16 2.28564C8.43799 2.28564 2.28564 8.43799 2.28564 16C2.28564 23.562 8.43799 29.7144 16 29.7144C23.562 29.7144 29.7144 23.562 29.7144 16C29.7144 8.43799 23.562 2.28564 16 2.28564Z"
                fill="white"
              />
              <path
                id="Vector_2"
                d="M21.7145 22.8568C21.4221 22.8568 21.1296 22.7452 20.9064 22.5218L9.47797 11.0934C9.03143 10.6468 9.03143 9.92368 9.47797 9.47739C9.92426 9.0311 10.6476 9.03085 11.0939 9.47739L22.5224 20.9059C22.9689 21.3524 22.9689 22.0755 22.5224 22.5218C22.2993 22.7452 22.007 22.8568 21.7145 22.8568Z"
                fill="white"
              />
              <path
                id="Vector_3"
                d="M10.2858 22.8569C9.99335 22.8569 9.70111 22.7453 9.47797 22.5219C9.03143 22.0756 9.03143 21.3522 9.47797 20.9059L20.9064 9.47748C21.353 9.03094 22.0761 9.03094 22.5224 9.47748C22.9687 9.92377 22.9689 10.6472 22.5224 11.0934L11.0939 22.5219C10.8708 22.7453 10.5783 22.8569 10.2858 22.8569Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1100_2117">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <h2 className="text-2xl font-bold  mb-2">
          Ready to create <br /> your <span className="italic">app?</span>
        </h2>
        <p className="mb-6 text-sm text-blue-100">Fill out the form below!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone number
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Requirement Brief
            </label>
            <textarea
              name="brief"
              value={formData.brief}
              onChange={handleChange}
              className="w-full h-24 px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
         <div className="w-full flex justify-center">
         <button
            type="submit"
            className="w-auto py-4 px-10 bg-black rounded-[30px]  text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit →
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default page;
