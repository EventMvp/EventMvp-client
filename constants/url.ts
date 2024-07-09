export const config = {
  BASE_URL: process.env.NEXT_PUBLIC_PRODUCTIONS_URL,
  endpoints: {
    getAllEvents: "/events",
    getCategoryEvent: "/category",
    filteredEventByCategory: "/events/filter",
    searchByTitle: "/events/search",
    getEventById: "/events/",
  },
};
