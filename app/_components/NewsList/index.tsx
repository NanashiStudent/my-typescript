import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import { News } from "@/app/_libs/microcms";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p className={styles.noarticle}>記事が無いよ～</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id} className={styles.list}>
          <Link href={`/news/${article.id}`} className={styles.link}>
            <Image
              className={styles.image}
              src={article.image}
              alt=""
              width={446}
              height={250}
            />
            <dl className={styles.content}>
              <dt className={styles.title}>{article.title}</dt>
              <dd className={styles.meta}>
                <Category category={article.category} />
                <Date date={article.createdAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
