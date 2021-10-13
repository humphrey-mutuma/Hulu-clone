import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
    </div>
  );
}
