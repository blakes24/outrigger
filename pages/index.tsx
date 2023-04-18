import Head from "next/head";
import Image from "next/image";
import { Inter, Sarina } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../assets/boo-logo.webp";
import race from "../assets/race.jpg";
import paddling from "../assets/paddling.jpeg";
import { Hero } from "@/components/Hero";
import { Form } from "@/components/Form";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400",
  variable: "--sarina-font",
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero
        text="Bend Oregon Outrigger"
        img={paddling}
        altText="Outrigger Canoe"
      />
      <div className={styles.container}>
        <h2 className={styles.title}>Aloha! E komo mai!</h2>

        <p className={styles.intro}>
          Mahalo for your interest in the Bend Outrigger Canoe Club! We are a
          non profit, competitive paddling club based out of the high desert of
          beautiful Central Oregon. We compete in distance races across the
          Pacific Northwest. If you have interest in outrigger paddling, we
          welcome anyone with or without experience to come out and paddle with
          us!
        </p>
        <div className={styles.box}>
          <div className={styles.flex}>
            <div>
              <p>
                <span className={styles.three}>3</span>
                <span className={styles.for}>for</span>
              </p>
              <p className={styles.free}>FREE</p>
            </div>
            <p className={styles.paddle}>PADDLING SESSIONS</p>
          </div>
          <p>
            Paddles will be provided. Simply fill out the form below to get
            started!
          </p>
        </div>
        <Form />
      </div>
    </main>
  );
}
