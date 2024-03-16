import { FC } from 'react';

interface Props {}

const Signup: FC<Props> = (): JSX.Element => {
  return (
    <div className="rounded-md bg-base-100 p-3">
      <form className="flex flex-col gap-2">
        <label htmlFor="email" className="text-gray-700 text-sm font-bold">
          Sign up for our newsletter:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          className="input-bordered input w-full max-w-xs"
        />
        <button type="submit" className="btn-primary btn">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Signup;
