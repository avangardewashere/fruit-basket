import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import appleImg from "@/assets/img/apple.png"
import Image from "next/image";
import Link from "next/link";


const Homepage = memo(function Homepage() {
  return (
    <div className={clsx(style.container)}>
      <div>Homepage</div>

      <div className={clsx(style.card)}>
        <Image src={appleImg} alt="" />
     
        <div className={style.details}>
          <h1>Apple</h1>
          <span>A tasty Red Fruit</span>
        </div>
      </div>

      <Link href={"/addFruit"}>Add a fruit</Link>
    </div>
  );
});

export default Homepage;
