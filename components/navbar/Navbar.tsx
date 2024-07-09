"use client";

import { signIn, useSession } from "next-auth/react";
import NavbarUser from "./NavbarUser";

const Navbar = () => {
  const { data: session } = useSession();
  console.log("SESSION", session);

  return (
    <>
      {session ? (
        <NavbarUser />
      ) : (
        <div className="navbar bg-transparent justify-between pt-5">
          <a className="btn btn-ghost text-xl pl-2">EventHive</a>
          <div className="flex gap-2 mr-2">
            <button className="btn btn-ghost" onClick={() => signIn()}>
              Log in
            </button>
            <button className="btn btn-primary no-underline">Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
