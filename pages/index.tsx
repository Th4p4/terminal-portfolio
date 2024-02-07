import type { GetStaticProps, NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";




export const meta = {
  description:
    "Sandip Thapa is a Blockchain/Node Engineer based on Kathmandu, Nepal. He is passionate about writing codes and developing web applications to solve real-life challenges in the field of blockchain and web development",
  author: "Sandip Thapa",
  type: "website",
  ogImage: `${process.env.NEXT_PUBLIC_URL}/satnaing-dev-og-new.png`,
  siteName: "Sandip Thapa",
  imageAlt: "Sandip Thapa portfolio website",
};

const Home: NextPage = () => {
  return (
    <>
      <AppHead
        title="Sandip Thapa - A Blockchain/NodeJS Developer"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>Sandip Thapa</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            {/* <BlogSection posts={blogPosts} /> */}
            <ContactSection />
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};



export default Home;
