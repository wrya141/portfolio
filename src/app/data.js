/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

/*
how to add data
id:number,
name:"name of project"
data: '2025-1-1'
demoLink:"websiteLint";

*/

export const projectsData = [];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/wrya141",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/wrya-baxtyar-1a7b6a250/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://www.x.com/wrya141",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
