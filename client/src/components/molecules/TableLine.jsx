/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import RecordModal from '../organisms/UpdateModal';

export default function TableLine({ lineItem }) {
  const { name, email, industry, website, status, id, logoLink } = lineItem;
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {isOpen && (
      <RecordModal
        data={lineItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      )}
      <tr key={id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <img className="h-10 w-10 rounded-full" src={logoLink} alt="" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{name}</div>
              <div className="text-sm text-gray-500">{email}</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{industry}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{email}</div>
          <div className="text-sm text-gray-500">
            <Link href={website}>
              <a href={website} target="_blank" rel="noreferrer">
                {website}
              </a>
            </Link>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
            ${(status) ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
          >
            {status ? 'Active' : 'Inactive'}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <button
            type="button"
            className="text-indigo-600 hover:text-indigo-900"
            onClick={openModal}
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
}
