import Link from 'next/link';
import React, { useState } from 'react'

type Props = {}

const Form = (props: Props) => {

      const [formData, setFormData] = useState({
        Firstname: "",
        Lastname:"",
        WorkEmail: "",
        BusinessName: "",
        Password:""
      });

      const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

// TO HANDLE SUBMIT
      const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // You can implement email sending functionality here using an API or a service.
       
        console.log(formData);

        // Reset the form fields
        setFormData({
          Firstname: "",
          Lastname: "",
          WorkEmail: "",
          BusinessName: "",
          Password: "",
        });
      };



  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="mb-4">
          <label
            htmlFor="Firstname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.Firstname}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Lastname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.Lastname}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="BusinessName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Business name and HQ location:
          </label>
          <input
            type="text"
            id="BusinessName"
            name="BusinessName"
            value={formData.BusinessName}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="WorkEmail"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Work email:
          </label>
          <input
            type="email"
            id="WorkEmail"
            name="WorkEmail"
            value={formData.WorkEmail}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="email"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <p className="text-[16px] text-[#FF4E4E] mt-[.5rem]">
            Password must be at least 12 characters
          </p>
        </div>

        <button
          type="submit"
          disabled
          className="w-[35%] md:w-[25%] bg-[#CED6F7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[25px] focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>

        <p className="text-[14px] mt-4">
          By clicking "Start Application". I agree to Mecury's{" "}
          <span>
            <Link href="/" className="capitalize underline">
              Terms of use privacy policy
            </Link>
          </span>{" "}
          and torecieve electronic communication about my account and services
          per{" "}
          <span>
            <Link href="/" className="capitalize underline">
              Mecury's electronic communications agreement
            </Link>
          </span>{" "}
          and aknowledge reciept of{" "}
          <span>
            <Link href="/" className="capitalize underline">
              Mecury's patriot act disclosure
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Form