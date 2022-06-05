import React from 'react'
import Link from 'next/link'
import { Card, Col, Container, Nav, Navbar, NavItem, Row } from 'react-bootstrap'

import style from './HeaderNav.module.css'


const HeaderNav = () => {
  return (
    <Navbar expand="lg" variant='light' color='primary' className={style.container_nav + ' '}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" color='dark'/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={"mx-auto gap-5 " + style.nav_bar}>
              <Link href='/'><Nav.Link href="/" className={style.nav_barItem}>Portofolio</Nav.Link></Link>
              <Link href='/gallery'><Nav.Link href="/gallery" className={style.nav_barItem}>Gallery</Nav.Link></Link>
              <Link href='/about'><Nav.Link href="/about" className={style.nav_barItem}>Contact</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>     
  )
}

export default HeaderNav