import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import walletExtension from "public/projects/walletExtension.png";
import xrpMarketplace from "public/projects/Xrp.png";
import landSell from "public/projects/Landsell UI.png";
import astroPaper from "public/projects/astro-paper.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be found in{" "}
        <a
          href={"/sandip.pdf"}
          target="_blank"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my resume
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Multi-Chain Wallet Extension",
    type: "Browser Extension",
    image: (
      <Image
        src={walletExtension}
        sizes="100vw"
        fill
        alt="Wallet Extension"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Multi-Chain Wallet Browser Extension developed with React and TypeScript. In this project, we can create, import, and manage multiple wallets for different blockchains like Ethereum, Binance Smart Chain, Polygon and Ziliqa",
    tags: ["React", "TypeScript", "Blockchain"],
    liveUrl: "https://terminal.satnaing.dev/",
    codeUrl: "https://github.com/satnaing/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "XRP NFT Marketplace",
    type: "NFT Marketplace",
    image: (
      <Image
        src={xrpMarketplace}
        sizes="100vw"
        fill
        alt="Xrp NFT Marketplace"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "XRP NFT Marketplace is a decentralized application developed with React, TypeScript, and XRP RPC calls. In this project, we can mint, buy, sell, and transfer NFTs on the XRP Ledger using Xumm Wallet.",
    tags: ["ReactJs", "TypeScript", "TailwindCSS", "XRP Ledger", "Xumm Wallet"],
    liveUrl: "https://haru-fashion.vercel.app/",
    codeUrl: "https://github.com/satnaing/haru-fashion",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "NFT Marketplace for Metaverse Platform",
    type: "NFT Marketplace",
    image: (
      <Image
        src={landSell}
        sizes="100vw"
        fill
        alt="Haru API"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "NFT Marketplace API for Metaverse Platform developed with ExpressJS, TypeScript, and MongoDB. In this project, we can create, transfer, and sell NFTs on the Metaverse Platform in EVM blockchain.",
    tags: [
      "ExpressJS",
      "TypeScript",
      "Marketplace",
      "EVM Blockchain",
      "MongoDB",
    ],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
    bgColor: "bg-[#C5E4E7]",
  },
  // {
  //   title: "AstroPaper",
  //   type: "Frontend",
  //   image: (
  //     <Image
  //       src={astroPaper}
  //       sizes="100vw"
  //       fill
  //       alt="AstroPaper"
  //       className="transition-transform duration-500 hover:scale-110 object-cover"
  //     />
  //   ),
  //   desc: "A minimal, responsive and SEO-friendly blog theme for Astro. This theme is developed with Astro, TypeScript and React. This theme includes fuzzy-search, pagination etc.",
  //   tags: ["Astro", "TypeScript", "React", "TailwindCSS"],
  //   liveUrl: "https://astro-paper.pages.dev/",
  //   codeUrl: "https://github.com/satnaing/astro-paper",
  //   bgColor: "bg-[#9FD0E3]",
  // },
];

export default ProjectSection;
