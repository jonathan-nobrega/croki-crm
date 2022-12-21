/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon as PlusIconOutline } from '@heroicons/react/outline';
import { useState } from 'react';
import CreateModal from '../organisms/CreateModal';

interface ButtonStyle {
  text: string
  category: 'primary' | 'secundary' | 'white'
}

export default function CreateButton(props: ButtonStyle) {
  const { text, category } = props;
  const [isOpen, setIsOpen] = useState(false);
  let style: string;

  function openModal() {
    setIsOpen(true);
  }

  switch (category) {
    case 'secundary':
      style = '<text-croki-500 bg-croki-200 hover:bg-croki-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-croki-500';
      break;
    case 'white':
      style = 'text-croki-500 border border-croki-500 bg-transparent hover:bg-croki-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-croki-400';
      break;
    case 'primary':
    default:
      style = 'text-white bg-croki-300 hover:bg-croki-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-croki-500';
      break;
  }

  return (
    <>
      {isOpen && (
      <CreateModal
        type=""
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      )}
      <button
        onClick={() => openModal()}
        type="button"
        className={`font-medium text-sm inline-flex items-center px-3 py-2 border border-transparent rounded-lg shadow-sm ${style}`}
      >
        <PlusIconOutline className="h-5 w-5 mr-2" aria-hidden="true" />
        {text}
      </button>

    </>

  );
}
