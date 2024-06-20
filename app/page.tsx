import Navbar from "../components/navbar/Navbar";
import FirstHero from "./components/FirstHero/FirstHero";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import SearchBar from "./components/FirstHero/SearchBar";
import EventList from "./components/EventList/EventList";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <FirstHero />
      <UpcomingEvents />
      <EventList />
      <Footer />
    </>
  );
};

export default page;
