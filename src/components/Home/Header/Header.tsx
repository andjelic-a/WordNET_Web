import "../../../css/HomeComponents.css";
// @ts-ignore
import { Link } from "react-router-dom";

function Header() {
  type navBarItem = {
    name: string;
    link: string;
  };

  const listItems: navBarItem[] = [
    { name: "Почетна страна", link: "/" },
    { name: "Архива", link: "/archive" },
  ];

  return (
    <header>
      <div className="navbar">
        <div className="logo-name">
          <img
            src="../../../../img/BookLogo.png"
            alt="Logo"
            draggable="false"
          />
          <p>WordNET</p>
        </div>
        <ul>
          {listItems.map((item) => (
            <li key={item.name}>
              <Link to={item.link} draggable="false">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
