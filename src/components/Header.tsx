import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="wrapper flex justify-between items-center py-6">
        <h1>Oliver Lister</h1>
        <NavBar />
      </div>
    </header>
  );
}
