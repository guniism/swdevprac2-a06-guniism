import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main className={styles.main} >
      
      <Banner />
        <div className="max-w-6xl w-full mx-auto px-4">
          <CardPanel />
        </div>

    </main>
  );
}
