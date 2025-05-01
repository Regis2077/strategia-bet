import styles from "./page.module.css";
import PartidasTable from "@/components/partidas";
import { serieB } from "@/components/partidas/Mock";


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>APOSTA BRABA</h1>
      <PartidasTable partidas={serieB.partidas} />
    </div>
  );
}
