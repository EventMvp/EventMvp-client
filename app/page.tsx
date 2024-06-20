import Navbar from "./components/navbar/Navbar";
import FirstHero from "./components/FirstHero/FirstHero";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import SearchBar from "./components/FirstHero/SearchBar";

const page = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <FirstHero />
      <UpcomingEvents />
    </>
  );
};

export default page;
