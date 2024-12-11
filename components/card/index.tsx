import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import appleImg from "@/assets/img/apple.png";
import Image from "next/image";
import Link from "next/link";

interface ICard {
  title?: string;
  details?: string;
  id?:string;
}

const Card = memo(function Card({ title, details,id }: ICard) {
  return (
    <div className={clsx(style.card)}>
      <div className={clsx(style.info)}>
        <Image src={appleImg} alt="" />

        <div className={style.details}>
          <h1>{title ?? "Fruit"}</h1>
          <span>{details ?? "Fruit description."}</span>
        </div>
      </div>
      <div className={clsx(style.actions)}>
        <button>
          <Link href={"/updateFruit/"+id}>Update</Link>
        </button>
        <button>
          <Link href={"/addFruit"}>Delete</Link>
        </button>
      </div>
    </div>
  );
});

export default Card;
