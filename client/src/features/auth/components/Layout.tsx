import { LayoutProps } from "../types/";


export const Layout = ({children,title}:LayoutProps) => {
  return (
    <>
      <div className="flex bg-blue-400 h-screen items-center justify-center ">
        <div className="flex flex-col bg-slate-300 h-auto w-1/3 p-4 m-4 rounded shadow-lg">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
