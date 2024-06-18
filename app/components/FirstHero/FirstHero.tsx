import Image from "next/image";
import SearchBar from "./SearchBar";

const FirstHero = () => {
  return (
    <section className="pt-3 relative text-white">
      <img src="https://placehold.co/600x400" alt="placeholder" />
      <div className="absolute -bottom-10 right-4">
        <SearchBar />
      </div>
    </section>
  );
};

export default FirstHero;
