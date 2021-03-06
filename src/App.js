import React from 'react';
import './App.css';

import Skill from './components/Skill';
import Project from './components/Project';



import avatar from './img/me2.png'

import tgIcon from './img/contacts/tg.svg'
import ghIcon from './img/contacts/gh.svg'
import gmIcon from './img/contacts/gm.svg'

import htmlIcon from './img/skills/html.svg'
import cssIcon from './img/skills/css.svg'
import jsIcon from './img/skills/js.svg'
import reactIcon from './img/skills/react.svg'
import bemIcon from './img/skills/bem.svg'
import bootstrapIcon from './img/skills/bootstrap.svg'

import logoipsumImage from './img/content/project1.png'
import iphubImage from './img/content/iphub-screenshot2.png'



function App() {
	return (
    	<div className="App">
			<main className='portfolio'>
				<header className='portfolio__header header'>
					<div className="potrfolio__container container">

						<div className="header__info">
							<div className="header__content">
								<img height='80px' src={avatar} alt="#" className="header__avatar" />
								<div className="header__text">
									<h1 className="header__title">Kirill Petrov</h1>
									<h2 className="header__subtitle">Junior Frontend Developer</h2>
								</div>
							</div>
							<ul className="header__contacts contacts">
								<li className="contacts__item contact">
									<a href="https://t.me/kk_ppetrov/" className="contact__link">
										<img className='contact__icon' src={tgIcon} alt="Telegram" />
									</a>
								</li>

								<li className="contacts__item contact">
									<a href="https://github.com/kkk-petrov/" className="contact__link">
										<img className='contact__icon' src={ghIcon} alt="Github" />

									</a>
								</li>

								<li className="contacts__item contact">
									<a href="mailto:kkpetrov.dev@gmail.com" className="contact__link">
										<img className='contact__icon' src={gmIcon} alt="Gmail" />

									</a>
								</li>
							</ul>
						</div>
						<ul className="header__skills skills">
							<Skill items={[{
								icon: htmlIcon,
								name: "HTML"
							},{
								icon: cssIcon,
								name: "CSS"
							},{
								icon: bootstrapIcon,
								name: "Bootstrap"
							},{
								icon: bemIcon,
								name: "BEM"
							},{
								icon: jsIcon,
								name: "JS"
							},{
								icon: reactIcon,
								name: "React.js"
							}
							]}/>
						</ul>
					</div>
					
				</header>
				
				<section className='portfolio__content content'>
					<div className="content__container container">
						<h1 className="content__title">PORTFOLIO</h1>

						<ul className="content__list projects">
							<Project items={[
								{
									image: logoipsumImage,
									title: "LogoIpsum",
									about: "Simple landing, not adapted for screens of different devices.",
									goto: "https://kkk-petrov.github.io/logoipsum-landing/",
									code: "https://github.com/kkk-petrov/logoipsum-landing/",
									stack: ["HTML", "CSS"]
								},
								{
									image: iphubImage,
									title: "IPhub",
									about: "Multipage responsive website",
									goto: "https://kkk-petrov.github.io/iphub/",
									code: "https://github.com/kkk-petrov/iphub/",
									stack: ["HTML", "CSS", "JavaScript"]
								}
							]}/>
						</ul>
					</div>
				</section>
			</main>
		</div>
  	);
}

export default App;
