import Layout from "@/components/Layout";
import Hero from "@/section/home/Hero";
import Info from "@/section/home/Info";
import Stats from "@/section/home/Stats";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Stats/>
        <Info />
      </Layout>
    </>
  );
}
