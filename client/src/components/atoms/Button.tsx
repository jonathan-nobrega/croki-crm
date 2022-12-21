/* This example requires Tailwind CSS v2.0+ */
import { PlusIcon as PlusIconOutline } from '@heroicons/react/outline';

interface ButtonStyle {
  text: string
  type: 'primary' | 'secundary' | 'white'
}

export default function Button(props: ButtonStyle) {
  const { text, type } = props;
  let style: string;

  switch (type) {
    case 'secundary':
      style = '<text-croki-500 bg-croki-200 hover:bg-croki-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-croki-500';
      break;
    case 'white':
      style = 'text-croki-500 border border-croki-500 bg-transparent hover:bg-croki-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-croki-400';
      break;
    case 'primary':
    default:
      style = 'text-white bg-croki-400 hover:bg-croki-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-croki-500';
      break;
  }

  return (
    <button
      type="button"
      className={`font-medium text-sm inline-flex items-center px-3 py-2 border border-transparent rounded-lg shadow-sm ${style}`}
    >
      <PlusIconOutline className="h-5 w-5 mr-2" aria-hidden="true" />
      {text}
    </button>
  );
}
