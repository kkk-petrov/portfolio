import React from 'react';
import './App.css';

import Skill from './components/Skill';


import avatar from './img/avatar.jpg'

import tgIcon from './img/contacts/tg.svg'
import ghIcon from './img/contacts/gh.svg'
import gmIcon from './img/contacts/gm.svg'

import htmlIcon from './img/skills/html.svg'
import cssIcon from './img/skills/css.svg'
import jsIcon from './img/skills/js.svg'
import reactIcon from './img/skills/react.svg'
import bemIcon from './img/skills/bem.svg'
import bootstrapIcon from './img/skills/bootstrap.svg'



function App() {
	return (
    	<div className="App">
			<main className='portfolio'>
				<div className="potrfolio__container container">
					<header className='portfolio__header header'>
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
									<a href="/#" className="contact__link">
										<img className='contact__icon' src={tgIcon} alt="Telegram" />
									</a>
								</li>

								<li className="contacts__item contact">
									<a href="/#" className="contact__link">
										<img className='contact__icon' src={ghIcon} alt="Github" />

									</a>
								</li>

								<li className="contacts__item contact">
									<a href="/#" className="contact__link">
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
							
					</header>
				</div>
				<section className='portfolio__content'>

				</section>
			</main>
    	</div>
  	);
}

export default App;
