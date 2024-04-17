import React from 'react';

import SubHeading from '@src/components/custom/UI/SubHeading';

function SubscriptionForm() {
  return (
    <div>
      <div className="card my-3 border bg-base-200 p-1">
        <SubHeading title="Subscribe to my newsletter" />
        <p className="mb-3 text-center">Subscribers:</p>
        <ul className="m-4 list-inside list-disc">
          <li>Get updates on new posts</li>
          <li>Get exclusive content</li>
          <li>Get early access to new projects</li>
        </ul>
      </div>
      <form
        method="post"
        action="https://systeme.io/embedded/15714774/subscription"
        className="mb-4 rounded-md bg-base-100 px-8 pt-6 pb-8 shadow-md"
      >
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-base-content" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-base-content shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-base-content" htmlFor="surname">
            Last Name
          </label>
          <input
            type="text"
            name="surname"
            id="surname"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-base-content shadow focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-base-content" htmlFor="email">
            Email
          </label>
          <input
            type="email" // Changed type to email for proper validation
            name="email"
            id="email"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-base-content shadow focus:outline-none"
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
