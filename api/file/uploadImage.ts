import { config } from "@/constants/url";

export const uploadImage = async (formData: FormData) => {
  try {
    const response = await fetch(
      config.BASE_URL + config.endpoints.uploadImage,
      {
        method: "POST",
        body: formData,
        credentials: "include",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Error: " + e);
  }
};
