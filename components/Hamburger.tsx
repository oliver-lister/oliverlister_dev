const spanClasses =
  "block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-primary dark:bg-secondary group-hover:bg-secondary dark:group-hover:bg-primary";

function Hamburger({ isMobileMenuOpen }: { isMobileMenuOpen: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span
        className={`${spanClasses} ${
          isMobileMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`my-0.5 ${spanClasses} ${
          isMobileMenuOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`${spanClasses} ${
          isMobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </div>
  );
}

export default Hamburger;
