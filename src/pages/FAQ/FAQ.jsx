import React from "react";

const FAQ = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions about how our business works and what
                can do for you.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How Long is this site live?
                  </summary>

                  <span>Almost Next Project ....</span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Can I install this website to my local system?
                  </summary>

                  <span>Download the source file and Node, Git also</span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How many authentication system I have added to my website?
                  </summary>

                  <span>
                    <li>Login and Register</li>
                    <li>Github</li>
                    <li>Google</li>
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What dependencies i have added in my website?
                  </summary>

                  <span className="px-4 py-2">
                    <li>Firebase</li>
                    <li>React Router Dom</li>
                    <li>React Icons</li>
                    <li>Daisy UI</li>
                    <li>React Hot Toast</li>
                    <li>React To PDF</li>
                    <li>.env.local</li>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How Many Pages In My Website?
                  </summary>

                  <span className="px-4 py-2">
                    <li>Home </li>
                    <li>Blog </li>
                    <li>Cources </li>
                    <li>Login </li>
                    <li>Register </li>
                    <li>Checkout </li>
                    <li>Course details</li>
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    How can I communicate with you?
                  </summary>

                  <span className="px-4 py-2">
                    <li>Whatsapp</li>
                    <li>Facebook</li>
                    <li>Telegram</li>
                    <li>Linkedin</li>
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
