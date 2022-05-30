import React, { FunctionComponent } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen max-h-screen py-0 px-40 flex flex-col justify-center items-center bg-[#e0e0f5]">
      <main className="w-full flex flex-1 flex-col justify-center items-center">
        {children}
      </main>
      <footer className="mb-2 border-t border-gray-600 text-center">
        &#169; tomoki1207 All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
