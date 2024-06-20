const Navbar = () => {
  return (
    <div className="navbar bg-transparent justify-between pt-5">
      <a className="btn btn-ghost text-xl pl-2">EventHive</a>
      <div className="flex gap-2 mr-2">
        <button className="btn btn-ghost">Log in</button>
        <button className="btn btn-primary no-underline">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
