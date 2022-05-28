import Head from 'next/head'
import Image from 'next/image'
import { Card, Col, Container, Nav, Navbar, NavItem, Row } from 'react-bootstrap'
import { VscFoldDown } from 'react-icons/vsc';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <Container>
      <Row>
        <Col lg='6' md='12'>
          <h1 className={styles.title + ' fw-bold text-center'}>Hello There!</h1>
          <h6 className={styles.subtitle1 + ' text-center'}>Welcome to my Portofolio</h6>
          <p className={'blockquote-footer mt-4 text-center '+styles.name}>Rizal Lazuardi Firdaus</p>
          <VscFoldDown className={styles.down + ' text-center'} size='40'  />
        </Col>
        <Col>
          <img src='./hero.png' className={styles.hero_image +' '}  />
        </Col>
      </Row>
    </Container>
  )
}
