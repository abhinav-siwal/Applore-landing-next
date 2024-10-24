"use client";
import Image from "next/image";
import axios from 'axios';
import { useState,useMemo } from "react";
import { useRouter } from 'next/navigation'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { countries } from "/data/countries.js";
import { isValidNumber, parsePhoneNumber } from 'libphonenumber-js';
const GetQuoteForm = ({ closeModal }) => {

// console.log(countries)

  const options = useMemo(() => countryList().getData(), []);
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().strict(true).required('Name is required'),
    company: Yup.string().required('Company is required'),
    email: Yup.string()
      .strict(true)
      .required('Email is required')
      .test('is-email', 'Invalid email format', (value) => emailRegex.test(value)),
    phoneNumber: Yup.string()
      .required('Phone is required')
      .test('is-valid-number', 'Invalid phone number', function (value) {
        const { phoneCode } = this.parent; // Access the phoneCode
        console.log(phoneCode)
        try {
          console.log(">>>>>>>>>>.",isValidNumber(`+${phoneCode}${value}`))
          // const phoneNumber = parsePhoneNumber(value, phoneCode);
          
          // console.log(phoneNumber)
           // Parse the phone number
          return isValidNumber(`+${phoneCode}${value}`); // Check if the number is valid
        } catch (error) {
          return false; // Return false if parsing fails
        }
      }),
    countryCode: Yup.string().required('Country is required'),
    brief: Yup.string().required('Brief description is required'),
  });
  
  const handleCountryChange = (selectedOption) => {
    formik.setFieldValue('countryCode', selectedOption.value);  // Set the country code
  };
  
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      company: "",
      countryCode: "",
      phoneCode: "+91",
      phoneNumber: "",
      interestedIn: "xyz",
      formType: "ENQUIRY",
      contactNumber: "7655675675",
      organisationSize: 0,
      brief: "",
    },
  
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      // alert(JSON.stringify(values, null, 2));
      
      // Create a customized payload from form val
      const payload = {
        email: values.email,
        name: values.name,
        company: values.company,
        countryCode: values.countryCode,
        phoneCode: values.phoneCode,
        phoneNumber: values.phoneNumber,
        interestedIn: values.interestedIn,
        formType: values.formType,
        contactNumber: values.contactNumber,
        organisationSize: values.organisationSize,
        brief: values.brief
      };
    
      try {
        const response = await axios.post('https://api.applore.in/api/user/addMessage', payload);
        console.log('Response:', response.data);
        router.push('/thank'); // Redirect on form submission
    
        // Handle success (e.g., show a success message, redirect, etc.)
      } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
        // Handle error (e.g., show an error message to the user)
      }
      
      handleSubmit(values); // Call the original handleSubmit function if needed
    },
    
  });

  const handleSubmit = async (values) => {
      console.log('Form values:', values);  
  }



    const router = useRouter()
 
  

  // Transform the countries array to match the format expected by react-select
  const countryOptions = countries.map((country) => ({
    value: country.phone,
    label: `${country.label} (+${country.phone})`,
  }));

  // Handler for react-select's value change
  const handleCountryCodeChange = (selectedOption) => {
    formik.setFieldValue('phoneCode', selectedOption.value); // Set phoneCode in Formik
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

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="rounded-lg border p-5 pb-8 border-gray-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="absolute left-0 text-red-500 text-sm mt-1">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                 value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                />
                {formik.touched.company && formik.errors.company ? (
                  <div className="absolute left-0 text-red-500 text-sm mt-1">{formik.errors.company}</div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
              <div className="relative">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="absolute left-0 text-red-500 text-sm mt-1">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="flex items-center space-x-2">
      <div className="w-24"> {/* Adjusted width for larger dropdown */}
        <label className="block text-sm font-medium mb-1">Phone</label>

        <Select
          name="phoneCode"
          className="border-b border-gray-600"
          value={countryOptions.find(option => option.value === formik.values.phoneCode)} // Set the selected value
          onChange={handleCountryCodeChange}  // Handle value change
          options={countryOptions}  // Pass the transformed countries array as options
          classNamePrefix="react-select"  // Add custom class for styling
          placeholder="Search country..."  // Placeholder text for the dropdown
          isSearchable  // Enable search functionality
          getOptionLabel={(option) => `${option.label}`}  // Show country name and phone code in options
          getOptionValue={(option) => option.value}  // Use the phone code as the value
          formatOptionLabel={(option, { context }) =>
            context === 'menu' ? `${option.label}` : `+${option.value}`
          }  // Show full label in dropdown but only phone code in selected value
          components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: '#12191B',
              border: 'none',
              borderColor: 'transparent',
              color: 'white',
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: '#12191B',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'white',
            }),
            input: (base) => ({
              ...base,
              color: 'white',  // Make search input text white
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? '#2c3e50' : '#12191B',
              color: 'white',
            }),
          }} 
           placeholder="+91"
        />
      </div>

      <div className="flex-grow relative">
        <label className="block text-sm font-medium mb-1">&nbsp;</label>

        <input
          type="number"
          name="phoneNumber"
          value={formik.values.phoneNumber}  // Bind to Formik
          onChange={formik.handleChange}  // Handle change with Formik
          onBlur={formik.handleBlur}  // Handle blur for validation
          className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
          placeholder="Phone Number"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="absolute left-0 text-red-500 text-sm mt-1">
            {formik.errors.phoneNumber}
          </div>
        ) : null}
      </div>
    </div>
            </div>

            <div className="mt-7">
      <label className="block text-sm font-medium mb-1">Country</label>
      <Select
        name="countryCode"
        options={options}
        value={options.find(option => option.value === formik.values.country)}
        onChange={handleCountryChange}
        onBlur={formik.handleBlur}
        className="w-full px-3 py-2 border-b border-gray-600 bg-transparent text-white"
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: '#12191',
            border: 'none',
            boxShadow: 'none',
            color: 'white',
            borderColor: formik.touched.country && formik.errors.country ? 'red' : '#gray-600',
          }),
          singleValue: (base) => ({ ...base, color: 'white' }),
          menu: (base) => ({ ...base, backgroundColor: '#12191B' }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#1f2937' : '#12191B',
            color: 'white',
          }),
          input: (base) => ({
            ...base,
            color: 'white',  // Make search input text white
          }),
          placeholder: (base) => ({
            ...base,
            color: 'white',  // Make placeholder text white
            opacity: 1, // Ensure the placeholder is fully opaque
          }),

        }}
        placeholder="Select a location"
      />
      {formik.touched.country && formik.errors.country ? (
        <div className="text-red-500 text-sm mt-1">{formik.errors.country}</div>
      ) : null}
    </div>

            <div className="mt-7 relative">
              <label className="block text-sm font-medium mb-1">
                Brief Description
              </label>
              <textarea
                name="brief"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full h-24 px-3 py-2 border-b border-gray-600 bg-transparent text-white focus:outline-none focus:border-blue-500 focus:ring-0"
              />
              {formik.touched.brief && formik.errors.brief ? (
                <div className="absolute left-0 text-red-500 text-sm mt-1">{formik.errors.brief}</div>
              ) : null}
            </div>
          </div>

          <div className="w-full flex justify-center">
            {/* Button to open modal */}
        <button type="submit"  className="mt-8 bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 inter-semibold">
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
