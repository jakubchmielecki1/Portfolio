import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button className={styles["glow-on-hover"]}>
        <Link href="/">Portfolio </Link>
      </button>
      <button className={styles["glow-on-hover"]}>
        <Link href="/front-end">Front-end</Link>
      </button>
      <button className={styles["glow-on-hover"]}>
        <Link href="/cybersecurity">Cybersecurity</Link>
      </button>
      <button className={styles["glow-on-hover"]}>
        <Link href="/bachelor">Project</Link>
      </button>
    </nav>
  );
}
