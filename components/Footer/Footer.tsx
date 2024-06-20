import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 gap-4 mt-8 text-center text-white bg-primary">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">EventHive</h1>
        <p>Making your events unforgottable</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Follow Us</h1>
        <div className="flex space-x-4 justify-center">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
      <div className="text-center my-8">
        <p>&copy; 2024 EventHive. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
