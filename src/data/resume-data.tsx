import React from "react";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Hasan Shahriar",
  initials: "HS",
  location: "Helsinki, Finland",
  locationLink: "https://www.google.com/maps/place/Helsinki",
  about: "Full-stack founder and product builder—specializing in AI, automation, and SaaS",
  summary: (
    <>
      I'm a full-stack founder and product builder with 8+ years helping B2B companies grow through digital products. I focus on go-to-market strategy, growth marketing, and AI automation—turning technical problems into revenue. Known for launching products fast and building systems that scale.
    </>
  ),
  avatarUrl: "/avatar.png",
  personalWebsiteUrl: "https://hasanshahriar.com",
  contact: {
    email: "shahriar.rhiday@gmail.com",
    tel: "+358466152130",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rhiday",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hasan-shahriar-rhiday/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "University of Oulu",
      degree: "Master's in Information Processing Science",
      start: "2017",
      end: "2019",
    },
    {
      school: "American International University, Bangladesh",
      degree: "Bachelor in Computer Science",
      start: "2012",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Makeshift Digital",
      link: "https://makeshiftdigital.com",
      badges: ["Helsinki"],
      title: "Founder & CEO",
      start: "2023",
      end: null,
      description: (
        <>
          Solo-founded digital consultancy—scaled to 30+ clients in 7+ countries with 3x YoY growth, trusted by enterprise clients like KONE and startups like Zipli, Arkken.
          <ul className="list-inside list-disc">
            <li>
              Delivered Webflow, GenAI, and automation projects for B2B startups and marketeters across key industries in Nordics and UK
            </li>
            <li>
              Specialized in B2B lead generation, technical SEO, growth marketing, and business automation
            </li>
            <li>
              Built subscription/revenue models and drove recurring MRR for growth-stage clients
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Krusti Foodkits",
      link: "https://makeshiftdigital.com/how-krusti-foodkits-created-an-end-to-end-ecommerce-experience-with-shopify-webflow",
      badges: ["Helsinki"],
      title: "Cofounder & Lead Developer",
      start: "2019",
      end: "2022",
      description: (
        <>
          Launched D2C food-tech startup, building all tech and product alongside founding team.
          <ul className="list-inside list-disc">
            <li>
              Architected e-commerce and analytics stack—helping scale to €300k ARR and serving thousands of customers
            </li>
            <li>
              Simplified consumer journey and led technical integrations for rapid growth
            </li>
            <li>
              Achieved 90+ Google PageSpeed scores and 15% boost in conversion
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "TietoEVRY",
      link: "https://www.tietoevry.com",
      badges: ["Oslo"],
      title: "Junior Consultant, Technology Consulting",
      start: "2017",
      end: "2018",
      description: (
        <>
          Developed strategic automation and Open Banking initiatives for Nordic enterprise clients.
          <ul className="list-inside list-disc">
            <li>
              Secured 1M NOK pilot/funding, delivered fintech casework, and supported design sprint innovation
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Nordea",
      link: "https://www.nordea.com",
      badges: ["Helsinki"],
      title: "Trainee, Business Innovation",
      start: "2017",
      end: "2017",
      description: (
        <>
          Advised C-suite on digital strategy and product launches via Google Design Sprint.
          <ul className="list-inside list-disc">
            <li>
              Delivered analysis and insights for Open Banking, digital payments, and transformation
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "AI/GenAI/Prompt Engineering",
    "Product Strategy",
    "Webflow",
    "No Code",
    "LangChain",
    "Python",
    "Node.js",
    "Design Thinking",
  ],
  projects: [
    {
      title: "B2B food rescue platform ",
      techStack: [],
      description:
        "Automated CMS creation, reducing setup time by 70%",
      link: {
        label: "GitHub",
        href: "https://github.com/rhiday/Zipli-v3",
      },
    },
    {
      title: "AI agent for automated brand generation",
      techStack: [],
      description:
        "Multi-agent automation for business, using LLMs and RAG",
      link: {
        label: "Demo",
        href: "https://flowtusk.com",
      },
    },
  ],
} as const;
