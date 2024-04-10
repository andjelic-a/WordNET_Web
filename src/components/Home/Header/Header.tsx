import "../../../css/HomeComponents.css";
// @ts-ignore
import { Link } from 'react-router-dom';

function Header() {
    type navBarItem = {
        name: string;
        link: string;
    }

        const listItems: navBarItem[] = [

            { name: 'Početna strana', link: '/' }, 
            { name: 'O stranici', link: '/about' },
            { name: 'Zasluge', link: '/credits' }
        ];

        return (
            <>
                <header>
                    <div className="navbar">
                        <div className="logo-name">
                            <img src="../../../../img/BookLogo.png" alt="Logo" />
                            <p>WordNET</p>
                        </div>
                        <ul>
                            {listItems.map((item) => (<li key={item.name}><Link to={item.link}>{item.name}</Link></li>))}
                        </ul>
                    </div>
                </header>
            </>
        )
    }

export default Header;