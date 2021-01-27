import React from 'react'

export default function Pagination({profilePerPage, totalProfiles, paginate}) {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProfiles/profilePerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={(e) => paginate(e, number)} className="page-link" href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
