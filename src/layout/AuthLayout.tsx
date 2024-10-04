import React from "react";
import { Link, Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <header className="flex w-full justify-between px-8 py-4 font-heading">
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <img src="/logo.svg" alt="" />
          <span className="font-heading text-xl font-extra-bold">Tasklyf</span>
        </div>
        <nav className="flex items-center gap-7 font-body font-semi-bold">
          <Link to="/pro" className="rounded-md bg-blue px-4 py-2 text-white">
            Sign up as pro
          </Link>
          <Link to="/login" className="font-regular text-primary-grey">
            Login
          </Link>
          <Link to="/register" className="font-regular text-primary-grey">
            Register
          </Link>
        </nav>
      </header>
      <main className="mb-5 flex min-h-[100vh] w-full flex-col items-center bg-[#FCFCFC]">
        <Outlet />
      </main>
      <footer className="mt-auto flex w-full items-center justify-between px-20 py-8">
        <section className="flex w-full items-center gap-2">
          <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white">
            <img src="logo.svg" />
          </div>
          <p className="text-[16px] font-semi-bold text-secondary-grey">
            © 2024 Tasklyf, Inc.
          </p>
        </section>
        <section className="flex w-full justify-end gap-3 text-secondary-grey">
          <p>Help</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </section>
      </footer>
    </>
  );
}

export default AuthLayout;
