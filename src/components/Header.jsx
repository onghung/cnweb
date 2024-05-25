import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faFaceSmileWink, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { books } from '../../data.json';
import './Header.css';

function Header({ onSearchResults }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = books.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        if (typeof onSearchResults === 'function') {
            onSearchResults(results);
        }
    }, [searchTerm, onSearchResults]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="navbar navbar-light bg-light navbar-expand-md px-3">
            <a href="#" className="navbar-brand">
                <img src="tikilogo.png" alt="Tiki Logo" width="60px" height="60px" />
            </a>
            <div className="d-flex align-items-center w-50 position-relative mx-3">
                <input
                    className="form-control"
                    id="searchInput"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <div className="input-icons start-0">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-secondary" />
                    <span className="text-secondary">Freeship đến 30K</span>
                </div>
                <div className="position-absolute end-0">
                    <span className="text-primary">Tìm kiếm</span>
                </div>
            </div>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="menu">
                <ul className="navbar-nav ms-auto" style={{ listStyle: 'none' }}>
                    <li className="nav-item mx-4">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faHome} />
                            Trang chủ
                        </a>
                    </li>
                    <li className="nav-item mx-4">
                        <a href="#" className="nav-link">
                            <FontAwesomeIcon icon={faFaceSmileWink} />
                            Tài khoản
                        </a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link position-relative" style={{ display: 'inline-block' }}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <span id="chatNotif" className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ top: '20%' }}>
                                {searchResults.length}
                            </span>
                        </a>
                    </li>
                    <li className="nav-item mx-4">
                        <a className="nav-link">
                            <FontAwesomeIcon icon="ellipsis" className="fa-4x" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
