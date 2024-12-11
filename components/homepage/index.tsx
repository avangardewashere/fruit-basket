import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import appleImg from "@/assets/img/apple.png";
import Image from "next/image";
import Link from "next/link";
import Card from "../card";

const Homepage = memo(function Homepage() {
  return (
    <div className={clsx(style.container)}>
      <div>Homepage</div>


      <Card />
     
      <button>
        <Link href={"/addFruit"}>Add a fruit</Link>
      </button>
    </div>
  );
});

export default Homepage;
