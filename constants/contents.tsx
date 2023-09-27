import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

export const skills: string[] = [
  "Go",
  "Python",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Prometheus",
  "Grafana",
  "Django",
  "Java",
  "React/Typescript",
]

interface Company {
  name: string
  link: string
}

export interface Experience {
  company: Company
  period: string
  role: string
  description: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: {
      name: "Dgraph Labs",
      link: "https://dgraph.io/",
    },
    period: "August 2022 - July 2023",
    role: "Software Engineer Intern",
    description: [
      "Dgraph Labs is the company behind Dgraph, an open source, distributed graph database",
      "Worked on the backend and infrastructure of Dgraph Cloud, a managed Database-as-a-Service built on top of Kubernetes, AWS, and a few services written in Go",
      "Managed hundreds of customer databases on Kubernetes, and performed ops/on-call duties including deployments, Kubernetes upgrades, writing automations, monitoring, and incident management. Achieved > 99.9% uptime over the past year",
      "Led the effort to codify our cloud infrastructure with Terraform and drove it to completion",
    ],
    technologies: [
      "Django",
      "MySQL",
      "Elasticsearch",
      "Redis",
      "Celery",
      "React",
    ],
  },
  {
    company: {
      name: "Sea Labs (NYSE: SE)",
      link: "https://www.sea.com/home",
    },
    period: "May 2022 - August 2022",
    role: "Backend Engineer Intern",
    description: [
      "Developed a research paper search engine using Django, MySQL, and Elasticsearch for research scientists at Sea AI Labs (SAIL), which enabled them to search through hundreds of thousands of papers, receive curated lists, and subscribe to daily newsletters",
      "In charge of the release process for the app, which includes writing pre-release checklists, schema migrations, and deployments",
    ],
    technologies: [
      "Django",
      "MySQL",
      "Elasticsearch",
      "Redis",
      "Celery",
      "React",
    ],
  },
  {
    company: {
      name: "Trustana",
      link: "https://www.trustana.com/",
    },
    period: "December 2021 - January 2022",
    role: "Software Engineer Intern",
    description: [
      "Spearheaded the effort to build a marketing site using Next.js and a CMS called Plasmic. Containerized it using Docker to facilitate deployment in the cloud",
      "Created the infrastructure for deployment for a web app in AWS using Terraform. The infrastructure consists of a CDN and a Virtual Private Cloud containing public and private subnets, ECS cluster, logging, and an application load balancer",
    ],
    technologies: ["React", "Next.js", "Docker", "Terraform", "AWS"],
  },
  {
    company: {
      name: "ErudiFi (YC W18)",
      link: "https://www.erudifi.com/",
    },
    period: "May 2021 – August 2021",
    role: "Frontend Software Engineer Intern",
    description: [
      "Built the fourth major iteration of our mobile app from scratch using React Native and TypeScript in less than two months with three other engineers. In doing so, we saw a 52.6% increase in conversion rate within three weeks of launching the update",
      "Built and maintained our own UI components library to cut down development time significantly and used Storybook to document them",
    ],
    technologies: ["React Native", "Typescript", "Storybook"],
  },
]

export interface Project {
  name: string
  description: string
  image: string
  githubLink: string
  websiteLink?: string
  technologies: string[]
}

export const projects: Project[] = [
  {
    name: "SkillDeck",
    description:
      "SkillDeck is a portfolio builder that three of my friends and I built. The frontend is written in Typescript and React, while the backend is in Node.js and Express",
    image: "/groot.png",
    githubLink: "https://www.skilldeck.io/",
    technologies: ["React", "Typescript", "Node.js", "Express"],
  },
  {
    name: "stripe/pg-schema-diff",
    description:
      "pg-schema-diff is a Go library and CLI for diffing Postgres schemas and generating SQL migrations. I wrote a new feature to visualize the SQL dependency graph by encoding the internal graph struct to DOT format, allowing it to be displayed by GraphViz",
    image: "/groot.png",
    githubLink: "https://github.com/kevinmingtarja/lexiko",
    technologies: ["Go", "Postgres"],
  },
  {
    name: "P2ST",
    description:
      "P2ST is an LLM app that utilizes ChatGPT to help students in the National University of Singapore (NUS) in their learning process",
    image: "/commit-design.png",
    githubLink: "https://github.com/nussucommit/commit-design",
    websiteLink: "https://www.npmjs.com/package/commit-design",
    technologies: ["Django", "Postgres", "Linux", "Docker"],
  },
]

interface FooterLink {
  name: string
  href: string
  isExternal: boolean
  icon: any
}

const size = 24

export const footerLinks: FooterLink[] = [
  {
    name: "Github",
    href: "https://www.github.com/kevinmingtarja",
    isExternal: true,
    icon: <SiGithub size={size} />,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/in/kevinmingtarja/",
    isExternal: true,
    icon: <SiLinkedin size={size} />,
  },
  {
    name: "Email",
    href: "mailto:kevin.mingtarja@gmail.com",
    isExternal: false,
    icon: <SiGmail size={size} />,
  },
]
