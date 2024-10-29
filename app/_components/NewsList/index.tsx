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
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                className={styles.image}
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                src="/no-image.png"
                alt="No Image"
                className={styles.image}
                width={1200}
                height={630}
              />
            )}
          </Link>
          <dl>
            <dt className={styles.title}>{article.title}</dt>
            <dd className={styles.meta}>
              <Link
                href={`/news/category/${article.category.id}`}
                className={styles.categoryLink}
              >
                <Category category={article.category} />
              </Link>
              <Date date={article.createdAt ?? article.createdAt} />
            </dd>
          </dl>
        </li>
      ))}
    </ul>
  );
}
