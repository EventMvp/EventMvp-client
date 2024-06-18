const Navbar = () => {
  return (
    <div className="navbar bg-base-100 justify-between pt-3">
      <a className="btn btn-ghost text-xl">EventHive</a>
      <div className="flex gap-2">
        <button className="btn btn-ghost">Log in</button>
        <button className="btn btn-primary no-underline">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
