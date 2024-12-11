import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import appleImg from "@/assets/img/apple.png";
import Image from "next/image";
import Link from "next/link";

const Homepage = memo(function Homepage() {
  return (
    <div className={clsx(style.container)}>
      <div>Homepage</div>

      <div className={clsx(style.card)}>
        <div className={clsx(style.info)}>
          <Image src={appleImg} alt="" />

          <div className={style.details}>
            <h1>Apple</h1>
            <span>A tasty Red Fruit</span>
          </div>
        </div>
        <div className={clsx(style.actions)}>
          <button>
            <Link href={"/addFruit"}>Update</Link>
          </button>
          <button>
            <Link href={"/addFruit"}>Delete</Link>
          </button>
        </div>
      </div>

      <button>
        <Link href={"/addFruit"}>Add a fruit</Link>
      </button>
    </div>
  );
});

export default Homepage;
