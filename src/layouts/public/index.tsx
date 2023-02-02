import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

interface Props {
  children: JSX.Element[] | JSX.Element;
  title?: string;
}

const PublicLayout = ({ children, title }: Props) => {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:url" content="trualty-ventures-pvt-ltd.vercel.app" />
        <meta
          property="og:image"
          content="https://trualty-ventures-pvt-ltd.vercel.app/logo-og.png"
        />
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </section>
  );
};

export default PublicLayout;
