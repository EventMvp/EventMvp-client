export const config = {
  PROD_URL: process.env.NEXT_PUBLIC_PRODUCTIONS_URL,
  BASE_URL: process.env.NEXT_PUBLIC_DEV_URL,
  endpoints: {
    getAllEvents: "/events",
    getCategoryEvent: "/category",
    filteredEventByCategory: "/events/filter",
    searchByTitle: "/events/search",
    getEventById: "/events/",
    getProfile: "/users/profile",
    createUser: "/users/register",
    login: "/auth/login",
    uploadImage: "/file/upload",
    addEvent: "/events/add-event",
    buyEvent: "/transactions",
    getEventTicketByEventId: "/ticket/event/",
  },
};
