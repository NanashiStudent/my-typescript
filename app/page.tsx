import styles from "./page.module.css";
import Image from "next/image";

import NewsList from "@/app/_components/NewsList";
import Buttonlink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "10/5の週の申込を開始しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/10/3",
      createdAt: "2024/10/3",
      image: "/images/Emt1dUFUcAUhqfe.jfif",
    },
    {
      id: "2",
      title: "10/12の週の申込を開始しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/10/10",
      createdAt: "2024/10/10",
      image: "/images/1550405204659d0769bf3af.jpg",
    },
    {
      id: "3",
      title: "10/19の週の申込を開始しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/10/17",
      createdAt: "2024/10/17",
      image: "/images/sddefault.jpg",
    },
  ],
};

export default function Home() {
  const sliceData = data.contents.slice(0, 3);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>クチャラーデート</h1>
          <p className={styles.description}>
            よりハイクラスなクチャラーとの出会いをあなたに
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/images/restaurant_rich_couple.png"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={sliceData} />
        <div className={styles.newsLink}>
          <Buttonlink href="/news">もっとみる</Buttonlink>
        </div>
      </section>
    </>
  );
}
