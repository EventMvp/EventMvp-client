"use client";

import { signIn, useSession } from "next-auth/react";
import NavbarUser from "./NavbarUser";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  console.log("SESSION", session);

  return (
    <>
      {session ? (
        <NavbarUser />
      ) : (
        <div className="navbar bg-transparent justify-between pt-5">
          <Link href={"/"}>
            <p className="btn btn-ghost text-xl pl-2 cursor-pointer">
              EventHive
            </p>
          </Link>
          <div className="flex gap-2 mr-2">
            <button className="btn btn-ghost" onClick={() => signIn()}>
              Log in
            </button>
            <Link href={"/sign-up"}>
              <button className="btn btn-primary no-underline">Sign Up</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
