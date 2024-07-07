"use client";

import { ChevronDown, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClickBack}
      className="text-primary transition-transform duration-300 transform hover:scale-125">
      <ChevronLeft />
    </button>
  );
};

export default BackButton;
