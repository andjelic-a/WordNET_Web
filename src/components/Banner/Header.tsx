import "../../css/Components.css";

function Header() {
    const listItems: string[] = ["Početna strana", "O stranici", "Zasluge"];

    return (
        <>
            <header>
                <div className="navbar">
                    <div className="logo-name">
                        <img src="../../../../img/BookLogo.png" alt="Logo" />
                        <p>WordNET</p>
                    </div>
                    <ul>
                        {listItems.map((item) => (<li><a href="#">{item}</a></li>))}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;