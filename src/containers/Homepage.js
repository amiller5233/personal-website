import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../static/logo_full.svg';
// import bi_file_richtext from './static/bi-file-earmark-richtext-fill.svg';
import bi_file_text from '../static/bi-file-earmark-text-fill.svg';
import bi_github from '../static/bi-github.svg';
import bi_inbox from '../static/bi-inbox-fill.svg';
import bi_journal from '../static/bi-journal-bookmark-fill.svg';
import bi_linkedin from '../static/bi-linkedin.svg';
import bi_music_note from '../static/bi-music-note-list.svg';
// import bi_spotify from '../static/spotify.svg';
import bi_youtube from '../static/bi-youtube.svg';

function DynamicLink(props) {
	if (!props.href)
		return (<div>{ props.children }</div>)
	if (props.href.includes(':'))
		return (<a href={ props.href } target="_blank" rel="noreferrer">{ props.children }</a>)
	return (<Link to={ props.href }>{ props.children }</Link>)
}

function Homepage() {

	var links = [
		['Portfolio', bi_journal, '/portfolio', 'See examples of my work', 'purple'],
		['LinkedIn', bi_linkedin, 'https://www.linkedin.com/in/adam-miller-3b2b71127/', 'View my LinkedIn profile', 'blue'],
		['GitHub', bi_github, 'https://www.github.com/Babaganoosh76', 'See my GitHub profile'],
		['Resume', bi_file_text, 'https://drive.google.com/file/d/1Xxjl-RE47PY9QdvvuCfGrUkSaAEktabp/view?usp=sharing', 'Check out my resume', 'purple'],
		// ['Spotify', bi_spotify, '/spotify', 'Check out what I\'m currently listening to', 'green'],
		['Musescore', bi_music_note, 'https://www.musescore.com/babaganoosh76', 'Listen to some of my arrangements', 'blue'],
		['YouTube', bi_youtube, 'https://www.youtube.com/channel/UC_LIFVAPd40Cv8Hha3nRjuw', 'Check out some old vlogs I made', 'red'],
		['Contact Me', bi_inbox, 'mailto:amiller5233@gmail.com?subject=Hi Adam, it\'s great to meet you!', 'Reach out to me via email'],
	] 

	const list = links.map(function(l, k){
		return (
			<li key={ k } className="b1-wrap">
				<DynamicLink href={ l[2] }>
					<div>
						<h2>{ l[0] }</h2>
					</div>
					<div className="b1-icon">
						<span className={ l[4] }></span>
						<img src={ l[1] } alt={ l[0] } height="48" width="48" />
					</div>
					<p>{ l[3] }</p>
				</DynamicLink>
			</li>
		)
	})

	return (
		<div>
			<header>
				<img id="logo" src={ logo } alt="Adam Miller's logo" draggable="false" />
			</header>

			<div className="container" style={{'marginBottom':'30px'}}>
				<div className="heading">
					<span className="slash"></span><h1> 👋 Hi, I'm Adam!</h1><span className="slash"></span>
				</div>
				
				<p className="blurb">I’m an aspiring web designer and software developer in the Sacramento area. I have several years of professional experience in custom web design, web application development, project management, and a little bit of IT support.</p>
				<p className="blurb">As a graduate of Santa Clara University with a B.S. in Computer Engineering, I have experience with machine learning, web accessibility, web information management, computer networks, and many others from my coursework.</p>
				<p className="blurb">At this point in my career, I am eagerly searching for new opportunities where I can to continue to grow as a web designer and software developer. I love working with diverse teams, good communicators, any type of technology enthusiast!</p>
				<ul className="grid">{ list }
				</ul>
			</div>
		</div>
	)
}

export default Homepage;
