/* eslint-disable jsx-a11y/label-has-associated-control */
import Industries from '../../models/utils/industries';

export default function Example() {
  return (
    <form action="#" method="POST">
      <div className="my-10 sm:rounded-md sm:overflow-hidden">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
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
              id="industry"
              name="industry"
              autoComplete="industry"
              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            >
              {Industries.map((industry) => (
                <option>{industry}</option>
              ))}
            </select>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              autoComplete="status"
              className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-croki-500 focus:border-croki-500 sm:text-sm"
            >
              <option>active</option>
              <option>inactive</option>
            </select>
          </div>

        </div>
      </div>
    </form>

  );
}
