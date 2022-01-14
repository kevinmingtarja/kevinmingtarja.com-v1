import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

export const skills: string[] = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Go",
  "Python",
  // "Django",
  // "Java",
  "Terraform",
  "Docker",
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
      name: "National University of Singapore",
      link: "https://www.nus.edu.sg/",
    },
    period: "August 2021 – December 2021",
    role: "Teaching Assistant",
    description: [
      "Conducted weekly tutorial sessions for 18 students on programming methodology using Python, graded their assignments and provided constructive feedbacks",
    ],
    technologies: ["Python"],
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
  {
    company: {
      name: "NUS Students’ Union Committee for Information Technology",
      link: "https://www.nussucommit.com/",
    },
    period: "May 2021 - Present",
    role: "Technical Director",
    description: [
      "Leads and mentors a multinational team of 15 engineers on Git, database design, Python, Django, HTML, CSS, Javascript, and React",
      "Created and continuously developed a React reusable components library and published it to npm. And documented our components library using Storybook",
    ],
    technologies: [
      "Typescript",
      "React",
      "Python",
      "Django",
      "Storybook",
      "PostgreSQL",
    ],
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
    name: "commIT-design",
    description: "A React reusable components library for NUSSU commIT",
    image: "/commit-design.png",
    githubLink: "https://github.com/nussucommit/commit-design",
    websiteLink: "https://www.npmjs.com/package/commit-design",
    technologies: ["React", "Typescript", "Storybook"],
  },
  {
    name: "Groot",
    description:
      "A simple error logging service written in Go that logs errors to telegram groups using a bot.",
    image: "/groot.png",
    githubLink: "https://github.com/kevinmingtarja/groot",
    technologies: ["Go", "Docker", "AWS EC2", "Telegram Bot API"],
  },
  {
    name: "NUSSU eVoucher",
    description:
      "A web app made in collaboration with NUSSU Welfare for NUS students to receive and use eVouchers",

    image: "/evoucher.png",
    githubLink: "https://github.com/nussucommit/evoucher-frontend",
    websiteLink: "https://evoucher.nussu.org.sg/",
    technologies: ["React", "Typescript", "Django", "PostgreSQL"],
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
