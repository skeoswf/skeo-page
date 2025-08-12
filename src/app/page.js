import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className="intro-div">
        <button className="introButton">about</button>
        <button className="introButton">resume</button>
        <button className="introButton">projects</button>
        <button className="introButton">contact</button>
      </div>

    </div >
  );
}
