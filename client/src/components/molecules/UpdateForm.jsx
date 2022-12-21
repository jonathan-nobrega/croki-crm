/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import Industries from '../../models/utils/industries';
import Loading from '../atoms/Loading';

export default function Example(props) {
  const { data, setIsOpen, isOpen } = props;
  const { name, email, website, phone, status, industry } = data;

  const [inputName, setInputName] = useState(name);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputWebsite, setInputWebsite] = useState(website);
  const [inputPhone, setInputPhone] = useState(phone);
  const [inputStatus, setInputStatus] = useState(status);
  const [inputIndustry, setInputIndustry] = useState(industry);
  const [isUpdating, setIsUpdating] = useState(false);

  async function updateRecord() {
    setIsUpdating(true);
    const newData = {
      name: inputName,
      email: inputEmail,
      website: inputWebsite,
      phone: inputPhone,
      status: inputStatus,
      industry: inputIndustry
    };

    await axios({
      url: `${process.env.NEXT_PUBLIC_API_URL}/clients/${data.id}`,
      method: 'put',
      data: newData
    })
      .then((response) => console.log('response', response))
      .catch((err) => console.error('err', err));

    setIsUpdating(false);
    setIsOpen(false);
    Router.reload(window.location.pathname);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <form action="#" method="POST">
      <div className="my-10 sm:rounded-md sm:overflow-hidden">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              placeholder={name}
              onChange={(e) => setInputName(e.target.value)}
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              placeholder={phone}
              onChange={(e) => setInputPhone(e.target.value)}
              type="text"
              name="phone"
              id="phone"
              autoComplete="given-name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              placeholder={email}
              onChange={(e) => setInputEmail(e.target.value)}
              type="text"
              name="email-address"
              id="email-address"
              autoComplete="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="website-address" className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              placeholder={website}
              onChange={(e) => setInputWebsite(e.target.value)}
              type="text"
              name="website-address"
              id="website-address"
              autoComplete="website"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
              Industry
            </label>
            <select
              placeholder={industry}
              onChange={(e) => setInputIndustry(e.target.value)}
              id="industry"
              name="industry"
              autoComplete="industry"
              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            >
              {Industries.map((element) => (
                <option>{element}</option>
              ))}
            </select>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              placeholder={status}
              onChange={(e) => setInputStatus(e.target.value)}
              id="status"
              name="status"
              autoComplete="status"
              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            >
              <option>active</option>
              <option>inactive</option>
            </select>
          </div>

          {isUpdating ? (
            <Loading />
          ) : (
            <div className="mt-4 flex">
              <button
                type="button"
                className="mr-5 inline-flex justify-center rounded-md border border-transparent bg-croki-300 px-4 py-2 text-sm font-medium text-white
                    hover:bg-croki-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={updateRecord}
              >
                Update
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border-2 border-croki-200 px-4 py-2 text-sm font-medium text-gray-900
                    hover:bg-croki-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          )}

        </div>
      </div>
    </form>

  );
}
