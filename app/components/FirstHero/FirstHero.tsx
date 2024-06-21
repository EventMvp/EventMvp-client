import Image from "next/image";
import SearchBar from "./SearchBar";

const FirstHero = () => {
  return (
    <section className="pt-3 text-white relative">
      <div className="md:w-full w-full">
        <img
          src="https://placehold.co/800x400"
          alt="placeholder"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default FirstHero;
