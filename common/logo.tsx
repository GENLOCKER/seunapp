import React from "react";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Go Logistics Marketplace"
      width={45}
      height={40}
    />
  );
};

export default Logo;
