import Head from 'next/head'
import Image from 'next/image'
import { Card, Col, Container, Button, Row } from 'react-bootstrap'
import TypeAnimation from 'react-type-animation';
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <section className={styles.hero1_container}>
        <Container>
          <Row>
            <Col lg='7' md='12' className=''>
              <h1 className={styles.title + ' text-start fw-bold'}>Hi, Im 
                <span>
                  <TypeAnimation
                    cursor={true}
                    sequence={[
                      ' Rixzk..',
                      2000, ' Rizal', 2000
                    ]}
                    wrapper="a"
                    repeat={1}
                  />
                </span>
              </h1>
              <h6 className={styles.subtitle1 + ' '}>Im a <span>Frontend Web</span> Developer</h6>
              <div className={styles.btnCvWrapper}>
                <Button className={'' + styles.btnCv} variant="" >Download Resume</Button>
              </div>
            </Col>
            <Col lg='5' md='12'>
              <div className={styles.imgWrapper}>                
                <img src='./hero.png' className={styles.hero_image +' '}  />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.hero2_container + ' bg-dark'}>
        <Container className={styles.hero2} id='hero2' >
          <Row>
            <Col lg='5'>
              <h3 className='text-center'>About Me</h3>
              <h1 className='text-center'>Rizal Lazuardi Firdaus</h1>
              <p>My name is Rizal Lazuardi Firdaus. Im a <strong>Frontend Web Developer</strong> based in <strong>Indonesia</strong>. </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
