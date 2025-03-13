import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className={styles.main} >
      
      <Banner />
        <div className="max-w-6xl w-full mx-auto px-4">
          <div style={{margin:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around", gap: "20px"}}>
            <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
            <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
            <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
            {/* <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" /> */}
          </div>
        </div>

    </main>
  );
}
