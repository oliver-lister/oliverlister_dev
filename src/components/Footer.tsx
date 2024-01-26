import Button from "./Button";
import Icon from "./Icon";
import SocialsNav from "./SocialsNav";

export default function Footer() {
  return (
    <footer className="">
      <div className="wrapper grid grid-cols-3 py-6 items-center">
        <p className="justify-self-start">
          © 2023 <span className="hidden | sm:inline">Oliver Lister</span>
        </p>
        <SocialsNav />
        <Button className="flex gap-2 justify-self-end">
          <Icon icon="theme" />
          <span className="hidden | sm:block">Change Theme</span>
        </Button>
      </div>
    </footer>
  );
}
