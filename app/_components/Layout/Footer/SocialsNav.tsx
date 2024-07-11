import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function SocialsNav() {
  return (
    <nav className="justify-self-center">
      <ul className="flex gap-2 justify-center items-center | sm:justify-end">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/oliver-lister"
            aria-label="Github"
          >
            <IconBrandGithub size={30} className="hover:scale-110 transition" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/oliver-lister/"
            aria-label="Linkedin"
          >
            <IconBrandLinkedin
              size={30}
              className="hover:scale-110 transition"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
