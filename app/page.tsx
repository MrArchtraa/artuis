import ArtButton from "./components/Button/Button";
import ArtInput from "./components/Input/Input";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ArtButton/>
      <ArtInput/>
    </main>
  );
}
