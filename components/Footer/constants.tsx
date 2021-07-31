import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si"

interface LinkInfo {
  name: string
  href: string
  isExternal: boolean
  icon: any
}

const size = 24

export const links: LinkInfo[] = [
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
