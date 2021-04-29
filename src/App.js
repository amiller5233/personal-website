import { Switch, Route } from 'react-router-dom';

/*
import logo from './static/logo_full.svg';

// import bi_file_richtext from './static/bi-file-earmark-richtext-fill.svg';
import bi_file_text from './static/bi-file-earmark-text-fill.svg';
import bi_github from './static/bi-github.svg';
import bi_inbox from './static/bi-inbox-fill.svg';
import bi_journal from './static/bi-journal-bookmark-fill.svg';
import bi_linkedin from './static/bi-linkedin.svg';
import bi_music_note from './static/bi-music-note-list.svg';
import bi_spotify from './static/spotify.svg';
import bi_youtube from './static/bi-youtube.svg';
*/
import './App.css';

import Homepage from './containers/Homepage'
import Portfolio from './containers/Portfolio'
import Project from './containers/Project'

function App() {

	/*
	var links = [
		['Portfolio', bi_journal, '/portfolio', 'See examples of my work', 'purple'],
		['LinkedIn', bi_linkedin, 'https://www.linkedin.com/in/adam-miller-3b2b71127/', 'View my LinkedIn profile', 'blue'],
		['GitHub', bi_github, 'https://www.github.com/Babaganoosh76', 'See my GitHub profile'],
		['Resume', bi_file_text, 'https://drive.google.com/file/d/1Xxjl-RE47PY9QdvvuCfGrUkSaAEktabp/view?usp=sharing', 'Check out my resume', 'purple'],
		['Spotify', bi_spotify, '/spotify', 'Check out what I\'m currently listening to', 'green'],
		['Musescore', bi_music_note, 'https://www.musescore.com/babaganoosh76', 'Listen to some of my arrangements', 'blue'],
		['YouTube', bi_youtube, 'https://www.youtube.com/channel/UC_LIFVAPd40Cv8Hha3nRjuw', 'Check out some old vlogs I made', 'red'],
		['Contact Me', bi_inbox, 'mailto:amiller5233@gmail.com?subject=Hi Adam, it\'s great to meet you!', 'Reach out to me via email'],
	] 

	const list = links.map(function(l, k){
		return (
			<li key={ k } className="b1-wrap"><a href={ l[2] } target="">
				<div>
					<h2>{ l[0] }</h2>
				</div>
				<div className="b1-icon">
					<span className={ l[4] }></span>
					<img src={ l[1] } alt={ l[0] } height="48" width="48" />
				</div>
				<p>{ l[3] }</p>
			</a></li>
		)
	})
	*/
	return (
		<Switch>
			<Route exact path="/" component={ Homepage }/>
			<Route exact path="/portfolio" component={ Portfolio }/>
			<Route exact path="/project" component={ Project }/>
		</Switch>
	)

	/*
	return (
		<div>
			<header>
				<img id="logo" src={ logo } alt="Adam Miller's logo" draggable="false" />
			</header>

			<div className="container">
				<div className="heading">
					<span className="slash"></span><h1>Hi, I'm Adam!</h1><span className="slash"></span>
				</div>
				
				<p className="blurb">I am a recent graduate of Santa Clara University with a B.S. in Computer Science & Engineering. During my time in college, I learned a lot from programming classes and self-driven projects, and I continue to search for new things to learn about every day.<br/><br/>I'm currently searching for software engineering and web design related jobs, which will give me the opportunity to jumpstart my career and begin gaining valuable experience in the industry. Check out some of my work below!</p>
				<ul className="grid">{ list }
				</ul>
			</div>
		</div>
	)
	*/
}

export default App;
