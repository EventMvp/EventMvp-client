export const config = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  endpoints: {
    getAllEvents: "/events",
    getCategoryEvent: "/category",
    filteredEventByCategory: "/events/filter",
  },
};
