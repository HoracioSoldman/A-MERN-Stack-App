import React, { useEffect, useState } from 'react'
import { HeaderWrapper } from './header.style'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'


export default function Header() {

    const {pathname}= useLocation()
    const [pageTitle, setpageTitle] = useState('')

    useEffect(() => {
        switch(pathname){
            case '/create':
                setpageTitle('Create reservation')
                break;
            case '/update':
                setpageTitle('Update Reservation')
                break;
            default:
                setpageTitle('Reservations')
                break;
            
        }    
    }, [pathname])

    return (
        <HeaderWrapper>
            <div className="container">
                <h1>
                    <Link to="/" className="page-title">{pageTitle || 'Reservations'}</Link>
                </h1>
                
                <ul className="menu">
                    <li>
                        {
                            pathname === '/' ?
                            <Link to="/create" className="menu-item">Create</Link> :
                            pathname === '/create' || pathname === '/update' ?
                            <Link to="/" className="menu-item">List</Link> :
                            <></>
                        }
                    </li>
                </ul>
            </div>
        </HeaderWrapper>
    )
}
