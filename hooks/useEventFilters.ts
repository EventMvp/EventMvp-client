"use client";

import { FiltersEventParams } from "@/types/FilterEventParams";
import { useRouter, useSearchParams } from "next/navigation";
import { NextRequest } from "next/server";
import { useEffect, useState } from "react";

const useEventFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FiltersEventParams>({
    categoryId: null,
    date: null,
    isFree: null,
    page: 0,
    size: 5,
  });

  // TODO:
  // Check on refresh/reload state, make sure the state above match the filter state on the URL Param
  useEffect(() => {
    const query = new URLSearchParams(searchParams.toString());
    const categoryId = query.get("categoryId");
    const date = query.get("date") || null;
    const isFree =
      query.get("isFree") === "true"
        ? true
        : query.get("isFree") === "false"
        ? false
        : null;

    const parsedCategory: number | null = categoryId
      ? parseInt(categoryId)
      : null;

    setFilters((prevFilters) => ({
      ...prevFilters,
      categoryId: parsedCategory,
      date,
      isFree,
    }));
  }, [searchParams]);

  // Update URL with new filters
  const handleFilterChange = (newFilter: Partial<FiltersEventParams>) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, ...newFilter };
      const queryParams = new URLSearchParams();

      Object.keys(updatedFilters).forEach((key) => {
        const value = updatedFilters[key as keyof FiltersEventParams];
        if (value !== null && value !== undefined) {
          if (Array.isArray(value)) {
            queryParams.set(key, value.join(","));
          } else {
            queryParams.set(key, value.toString());
          }
        }
      });

      router.push(`?${queryParams.toString()}`);
      return updatedFilters;
    });
  };

  return { filters, handleFilterChange };
};

export default useEventFilters;
