import React, { FunctionComponent } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen py-0 px-40 flex flex-col justify-center items-center bg-[#dfe0f4]">
      <main className="flex-1 w-full flex flex-col justify-center items-center">
        {children}
      </main>
      <footer className="mb-2 text-[#292b3a] text-center">
        &#169; tomoki1207 All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
