"use client";
import FormSignIn from "./components/FormSignIn";

const SignIn = () => {
  return (
    <section
      className="min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/35/d2/8a/35d28a28330243b53f2d3e124b8b80c3.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="bg-primary bg-opacity-45 w-screen h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 flex flex-col text-center bg-opacity-85">
          <h1>EventHive</h1>
          <FormSignIn />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
