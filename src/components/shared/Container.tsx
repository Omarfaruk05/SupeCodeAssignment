import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl mx-auto py-2 px-2 md:px-12">{children}</div>;
};

export default Container;
