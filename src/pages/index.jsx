import Layout from "@/components/Layout";
import Hero from "@/section/home/Hero";
import Info from "@/section/home/Info";
import Stats from "@/section/home/Stats";
import Event from "@/section/home/Event";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Stats/>
        <Info />
        <Event />
      </Layout>
    </>
  );
}
