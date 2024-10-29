import logo from "../assets/react_logo.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
