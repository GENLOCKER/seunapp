import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      {" "}
      {/* Add text-center class here */}
      <h2 className="text-[18px] font-mono text-green-700 dark:text-primary">
        04.What&apos;s Next?
      </h2>
      <h2 className="text-secondary dark:text-info text-[48px] md:text-[60px] font-sans font-bold mb-3 ">
        Get in Touch
      </h2>
      <p className="text-secondary dark:text-warning text-[18px] font-sans max-w-xl mb-10 mx-auto">
        {" "}
        {/* Add mx-auto for centering */}
        If you have a question or you want to say hi, my inbox is open to you.
        I&apos;m also open to more collaborations on projects or full-time
        roles.
      </p>
      <a href="mailto:ogunrukuseun@gmail.com">
        <button className="btn px-3 md:px-6 btn-outline border-green-700 dark:border-primary hover:border-primary hover:bg-accent hover:text-primary rounded text-[15px] font-mono font-normal capitalize text-green-700 dark:text-primary">
          Say Hello
        </button>
      </a>
    </div>
  );
};

export default Contact;
