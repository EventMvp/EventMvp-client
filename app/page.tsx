import Navbar from "@/components/navbar/Navbar";
import SearchBar from "./components/FirstHero/SearchBar";
import FirstHero from "./components/FirstHero/FirstHero";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";
import EventList from "./components/EventList/EventList";
import Footer from "@/components/Footer/Footer";
import NavbarUser from "@/components/navbar/NavbarUser";

const page = () => {
  return (
    <>
      <Navbar />
      {/* <NavbarUser /> */}
      <SearchBar />
      <FirstHero />
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default page;
