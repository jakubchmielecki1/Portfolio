import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button>
        <Link href="/">Portfolio</Link>
      </button>
      <button>
        <Link href="/front-end">Front-end</Link>
      </button>
      <button>
        <Link href="/cybersecurity">Cybersecurity</Link>
      </button>
      <button>
        <Link href="/bechelor">Project</Link>
      </button>
    </nav>
  );
}
