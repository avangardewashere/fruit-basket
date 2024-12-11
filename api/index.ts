export const getFruits = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/fruit", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch fruits");
    }

    return res.json();
  } catch (e) {
    console.log("Error: ", e);
  }
};
