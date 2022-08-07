import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AstroTak</title>
        <meta
          name="description"
          content="Looking for astrological solutions..."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h3>HomePage</h3>
      </div>
    </div>
  );
}
