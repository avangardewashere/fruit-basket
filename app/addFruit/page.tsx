"use client"
import { memo, useState } from "react";
import clsx from "clsx";
import style from "./index.module.scss";



const AddFruit = memo(function AddFruit() {
	const [fruit,setFruit] = useState("")
	const [details,setDetails] = useState("")

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
		e.preventDefault()
		alert(fruit + " <br /> "+details)
	}

	return (
	<form onSubmit={handleSubmit}  className={clsx(style.container)}>
	  <input onChange={e=>setFruit(e.target.value)} type="text" placeholder="Enter Fruit Name" />
	  <input  onChange={e=>setDetails(e.target.value)} type="text" placeholder="Enter Fruit Description" />
	<button type="submit">
		Add Fruit
	</button>
	</form>
  );
});

export default AddFruit;