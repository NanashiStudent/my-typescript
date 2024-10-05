import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="ヘッダーのロゴ"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
      {/* <nav>
        <ul className={styles.items}>
          <li>
            <Link href="/news">ニュース一覧</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">問い合わせ先</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
