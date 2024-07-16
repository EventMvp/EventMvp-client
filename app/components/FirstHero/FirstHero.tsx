import Image from "next/image";
import SearchBar from "./SearchBar";

const FirstHero = () => {
  return (
    <section className="pt-3 text-white relative">
      <div className="md:w-full w-full h-[400px]">
        <img
          src="https://placehold.co/100x100"
          alt="placeholder"
          className="w-full object-cover h-[400px]"
        />
      </div>
    </section>
  );
};

export default FirstHero;
