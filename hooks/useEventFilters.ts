// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface Filters {
//   categoryId: number[];
//   date: string | null;
//   isFree: boolean | null;
//   page: number;
//   size: number;
// }

// const useEventFilters = () => {
//   const router = useRouter();
//   const [filters, setFilters] = useState<Filters>({
//     categoryId: [],
//     date: null,
//     isFree: null,
//     page: 0,
//     size: 5,
//   });

//   // Parse URL parameters and set filters state accordingly
//   useEffect(() => {
//     const query = new URLSearchParams(router.query as unknown as string);
//     const categoryId = query.get("categoryId")?.split(",").map(Number) || [];
//     const date = query.get("date") || null;
//     const isFree =
//       query.get("isFree") === "true"
//         ? true
//         : query.get("isFree") === "false"
//         ? false
//         : null;

//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       categoryId,
//       date,
//       isFree,
//     }));
//   }, [router.query]);

//   // Update URL with new filters
//   const handleFilterChange = (newFilter) => {
//     setFilters((prevFilters) => {
//       const updatedFilters = { ...prevFilters, ...newFilter };
//       const queryParams = new URLSearchParams();

//       Object.keys(updatedFilters).forEach((key) => {
//         if (updatedFilters[key] !== null && updatedFilters[key] !== undefined) {
//           if (Array.isArray(updatedFilters[key])) {
//             queryParams.set(key, updatedFilters[key].join(","));
//           } else {
//             queryParams.set(key, updatedFilters[key]);
//           }
//         }
//       });

//       router.push(`/events?${queryParams.toString()}`);
//       return updatedFilters;
//     });
//   };

//   return { filters, handleFilterChange };
// };

// export default useEventFilters;
