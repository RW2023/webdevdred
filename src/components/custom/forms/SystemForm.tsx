import React from 'react';
import SubHeading from '@src/components/custom/UI/SubHeading';

function SubscriptionForm() {
  return (
    <div>
      <SubHeading title="Subscribe to our newsletter" />
      <form
        method="post"
        action="https://systeme.io/embedded/15714774/subscription"
        className="bg-white mb-4 rounded px-8 pt-6 pb-8 shadow-md"
      >
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block text-sm font-bold" htmlFor="surname">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block text-sm font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 mb-2 block text-sm font-bold" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="text-gray-700 focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn-primary btn">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubscriptionForm;
