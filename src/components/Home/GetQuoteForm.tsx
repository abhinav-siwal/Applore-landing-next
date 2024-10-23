"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
const GetQuoteForm = ({ closeModal }) => {
    const router = useRouter()
 
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    brief: "",
  });

  const countriesAndCities = [
    { value: "USA", label: "USA" },
    { value: "India", label: "India" },
    // Add more countries and cities as needed
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center text-white  z-50">
      <div className="w-full max-w-[1100px] h-[750px] p-6 bg-[#12191B] rounded-lg shadow-md relative overflow-hidden overflow-y-auto">
      <div
        className="absolute -top-32 left-[200px] rounded-full h-[200px] w-[200px] filter blur-[100px]"
        style={{ background: "radial-gradient(circle, #5E6EF9, #5E6EF9)" }}
      ></div>
      <div
        className="absolute -bottom-0 -right-24 rounded-full h-[200px] w-[200px] filter blur-[100px]"
        style={{ background: "radial-gradient(circle, #5E6EF9, #5E6EF9)" }}
      ></div>
      <div
        className="absolute -bottom-0 left-2 rounded-full h-[200px] w-[200px] filter blur-[150px]"
        style={{ background: "radial-gradient(circle, #5E6EF9, #5E6EF9)" }}
      ></div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute sm:top-12 top-7 sm:right-5 right-3 cursor-pointer"
          onClick={closeModal}
        >
          <g id="fi_1617543" clipPath="url(#clip0_1100_2117)">
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

        <h2 className="text-2xl font-bold mb-2 sm:text-5xl mt-5">
  <span className="bricolage-grotesque-bold  bg-gradient-to-r from-white via-[#FFFFFF99] to-[#FFFFFF] bg-clip-text text-transparent">Ready to create <span className="libre-baskerville-regular-italic">your</span> app?</span>
</h2>

        <p className="mb-6 text-sm text-blue-100">Fill out the form below!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border p-5 border-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 mt-6">
                  <select
                    name="countryCode"
                    className="w-full px-3 py-2 border-b border-gray-600 bg-[#12191B] text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                  >
                    <option value="">+1</option>
                    <option value="">+91</option>
                  </select>
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-6 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>

            <div className="mt-7">
              <label className="block text-sm font-medium mb-1">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-600 bg-[#12191B] text-white focus:outline-none focus:border-blue-500 focus:ring-0"
              >
                <option value="" className="bg-[#12191B] text-white">
                  Select a location
                </option>
                {countriesAndCities.map((location) => (
                  <option
                    key={location.value}
                    value={location.value}
                    className="bg-[#12191B] text-white hover:bg-blue-500"
                  >
                    {location.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-7">
              <label className="block text-sm font-medium mb-1">
                Brief Description
              </label>
              <textarea
                name="brief"
                value={formData.brief}
                onChange={handleChange}
                className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                rows={3}
              />
            </div>
          </div>

          <div className="w-full flex justify-center">
            {/* Button to open modal */}
        <button onClick={() => router.push('/thank')}  className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 inter-semibold">
          <span>Submit</span>
          <Image src="/Home/rightArrow.svg" width={20} height={20} alt="Arrow" />
        </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteForm;
