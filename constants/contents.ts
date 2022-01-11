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
    period: "Dec 2021 - Jan 2022",
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
    period: "Aug 2021 – Dec 2021",
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
    period: "May 2021 – Aug 2021",
    role: "Frontend Software Engineer Intern",
    description: [
      "Built the fourth major iteration of our mobile app from scratch using React Native and TypeScript in less than two months with three other engineers. In doing so, we saw a 52.6% increase in conversion rate within three weeks of launching the update",
      "Built and maintained our own UI components library to cut down development time significantly and used Storybook to document them",
    ],
    technologies: ["React Native", "Typescript", "Storybook"],
  },
  {
    company: {
      name: "NUS Students’ Union Committee for Information Technology (NUSSU commIT)",
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
