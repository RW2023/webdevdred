'use client';
import { FC } from 'react';

interface Props {}

const SystemForm: FC<Props> = (): JSX.Element => {
  return (
    <form
      method="post"
      action="https://systeme.io/embedded/15714774/subscription"
      className="rounded-lg bg-base-100 p-4 shadow-lg"
    >
      <div className="form-control">
        <label className="label" htmlFor="first_name">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          placeholder="First Name"
          className="input-bordered input"
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="surname">
          <span className="label-text">Last Name</span>
        </label>
        <input
          type="text"
          name="surname"
          id="surname"
          placeholder="Last Name"
          className="input-bordered input"
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="input-bordered input"
        />
      </div>

      <div className="form-control mt-4">
        <button type="submit" className="btn-primary btn">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default SystemForm;
