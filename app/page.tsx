import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import Buttonlink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
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
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <Buttonlink href="/news">もっとみる</Buttonlink>
        </div>
      </section>
    </>
  );
}
