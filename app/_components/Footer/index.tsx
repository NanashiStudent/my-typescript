import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">ニュース</Link>
          </li>
          <li className={styles.item}>
            <Link href="/members">メンバー</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">問い合わせ先</Link>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>著作権は俺にある</p>
    </footer>
  );
}
