import SocialsNav from "./SocialsNav";
import ChangeThemeButton from "../../../../components/Button/ChangeThemeButton";

export default function Footer() {
  return (
    <footer className="border-t shadow bg-secondary-900 dark:bg-primary-400 dark:border-primary dark:shadow-secondary/20">
      <div className="wrapper grid grid-cols-3 items-center">
        <p className="justify-self-start">
          © {new Date().getFullYear()}{" "}
          <span className="hidden | sm:inline">Oliver Lister</span>
        </p>
        <SocialsNav />
        <ChangeThemeButton />
      </div>
    </footer>
  );
}
