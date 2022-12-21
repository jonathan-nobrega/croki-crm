/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useEffect, useState } from 'react';
import TableLine from '../molecules/TableLine';

const headers = [
  'name', 'industry', 'contact', 'status'
];

export default function Table() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function data() {
      const fetchClients = await axios.get('https://us-central1-croki-crm-api.cloudfunctions.net/clients');
      setItems(fetchClients.data);
      setLoading(false);
    }
    data();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:px-6 md:px-8">
      <div className="flex flex-col my-5">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Having some issues with loading component
                  and HeadlessUI child components structure */}
                  {/* {loading && (
                    <Loading />
                  )} */}
                  {items
                    && (items.map((person) => (
                      <TableLine
                        key={person.id}
                        lineItem={person}
                      />
                    )))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
