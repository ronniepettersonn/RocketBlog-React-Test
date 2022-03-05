import React from 'react'
import Logo from '../../images/logo.svg'
import Lupa from '../../images/search.svg'

import { Link } from 'react-router-dom'

import './styles.css'

export function Header(props) {
    return (
        <header>
            <div className="header">
                <div className="top-header">
                    <div className="logo">
                        <img src={Logo} />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/sobre">Sobre</Link></li>

                            <li><Link to="/categoria">Categoria</Link></li>

                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                    <form action="">
                        <input type="text" placeholder="Buscar" />
                        <button>
                            <img src={Lupa} />
                        </button>
                    </form>
                </div>
                {props.children}
            </div>
        </header >
    )
}