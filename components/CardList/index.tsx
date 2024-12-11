"use client"
import clsx from "clsx";
import style from "./index.module.scss";
import Card from "../card";
import { getFruits } from "@/api";
import { useRequest } from "ahooks";



export default function CardList() {
  const { data } = useRequest(getFruits);

  console.log(data);

  return (
    <div className={clsx(style.container)}>
     {data?.fruits?.map((item:any,index:number)=>(
		 <Card key={index} id={item.id} title={item.fruitName} details={item.details}/>
	 ))}
    </div>
  );
}
