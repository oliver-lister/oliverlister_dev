import Icon from "./Icon";

export default function SocialsNav() {
  return (
    <nav className="justify-self-center">
      <ul className="flex gap-2 justify-center items-center | sm:justify-end">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/oliver-lister"
          >
            <Icon icon="github" size="30" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/oliverdukemusic/"
          >
            <Icon icon="linkedin" size="30" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
