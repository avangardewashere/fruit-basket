"use client";
import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import { useRouter } from "next/navigation";

const AddFruit = memo(function AddFruit() {
  const [fruit, setFruit] = useState("");
  const [details, setDetails] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fruit || !details) {
      alert("Kindly filled up the input fields");
      return;
    }

    try {
      //connect to url
      const response = await fetch("http://localhost:3000/api/fruit", {
        //connection configurations
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ fruitName:fruit, details }),
      });

	  //response effects
      if (response.ok) {
		console.log("success, adding the fruit");
        router.push("/");
      } else {
        throw new Error("Failed to create a new fruit item.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(style.container)}>
      <input
        onChange={(e) => setFruit(e.target.value)}
        type="text"
        placeholder="Enter Fruit Name"
      />
      <input
        onChange={(e) => setDetails(e.target.value)}
        type="text"
        placeholder="Enter Fruit Description"
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
});

export default AddFruit;
