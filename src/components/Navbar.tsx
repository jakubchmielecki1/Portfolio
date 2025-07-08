import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button className={styles["portfolio-btn"]}>
        <Link href="/">
          <h1>Portfolio</h1>
        </Link>
      </button>
      <button className={styles["nav-btn"]}>
        <Link href="/front-end">Front-end</Link>
      </button>
      <button className={styles["nav-btn"]}>
        <Link href="/cybersecurity">Cybersecurity</Link>
      </button>
      <button className={styles["nav-btn"]}>
        <Link href="/bachelor">Project</Link>
      </button>
    </nav>
  );
}
