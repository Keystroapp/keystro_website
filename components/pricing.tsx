import Link from "next/link";
import { singleLink, threeLink } from "./url";

export default function Pricing() {
  return (
    <section className="max-w-4xl mx-auto" id="pricing">
      <div className="py-8 px-4 ">
        <div className="text-center mb-8 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Pay once, use forever
          </h2>
          <p className="mb-5 font-light text-[#8C8C8C] sm:text-xl dark:text-gray-400">
            Pricing is based on the number of devices you want to remove the
            watermark from. We know that our watermark is pretty anonying so we
            decided to go with a pay once, use forever price.
          </p>
        </div>
        <div className="space-y-8 grid grid-cols-2 gap-6 mobile:grid-cols-1 tablet:grid-cols-1 ">
          <Link
            href={singleLink}
            className="flex flex-col p-6 mx-auto max-w-lg text-center   rounded-lg text-white shadow  xl:p-8 bg-[#242424]"
          >
            <h3 className="mb-4 text-2xl font-semibold">Standard</h3>

            <div className="flex justify-center items-baseline my-4">
              <span className="mr-2 text-5xl font-extrabold">$14.99</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left mt-4">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Removes watermark on one device.</span>
              </li>{" "}
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Use forever.</span>
              </li>
            </ul>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
              Get started
            </button>
          </Link>
          <Link
            href={threeLink}
            className="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg text-white shadow  xl:p-8 bg-[#242424] border border-[#0D5EF4]"
          >
            <h3 className="mb-4 text-2xl font-semibold">Extended</h3>

            <div className="flex justify-center items-baseline my-4">
              <span className="mr-2 text-5xl font-extrabold">$29.99</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left mt-4">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Removes watermark on Three devices.</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Use forever on all your devices.</span>
              </li>
            </ul>
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0D5EF4] rounded-full text-white font-light transition duration-200 ease-linear">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
