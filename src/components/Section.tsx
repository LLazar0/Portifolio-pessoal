import React from "react";
import Logo from '../assets/react-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Section() {
    return (
        <section className="home">
            <div className="home-content">
                <h1>Opa, eu sou Luiz Lázaro</h1>
                <h3>Programador Júnior .</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quam, corrupti ratione accusantium ut sapiente 
                    consequuntur odio, ullam sint perspiciatis placeat 
                    nemo illum quidem nihil in magnam explicabo obcaecati 
                    dolorem amet. Ab, saepe!
                </p>
                <div className="btn-box">
                    <a href="#">Hire Me</a>
                    <a href="#">Let's Talk</a>
                </div>
            </div>
            <div className="home-sci">
                <a href=""><FontAwesomeIcon icon={faGithub} /></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href=""><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
            <div className="img-box">
                <img src={Logo} className="app-logo" alt="Imagem da logo do react" />
            </div>
        </section>
    );
}

export default Section;