import Image from "next/image";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <a href="/news">ニュースで～す</a>
          </li>
          <li className={styles.item}>
            <a href="/members">メンバーで～す</a>
          </li>
          <li className={styles.item}>
            <a href="/contact">問い合わせ先で～す</a>
          </li>
        </ul>
      </nav>
      <p className={styles.cr}>著作権は俺にある</p>
    </footer>
  );
}
