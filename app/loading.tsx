import Logo from "@/common/logo";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-opacity-5">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
};

export default loading;
