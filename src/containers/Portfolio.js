import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../static/logo_full.svg';

import sti_home from '../static/sti/sti_home.png';
import sti_gif from '../static/sti/sti_gif.gif';
import tra_home from '../static/tra/tra_home.png';
import tra_gif from '../static/tra/tra_gif.gif';
import ubs_home from '../static/ubs/ubs_home.png';
import ubs_gif from '../static/ubs/ubs_gif.gif';
import cpd_home from '../static/cpd/cpd_home.png';
// import cpd_gif from '../static/cpd/cpd_gif.gif';

function Portfolio() {

	var items = [{
		"name":"Sundance Transport Website",
		"desc_short":"I designed the company splash page for Sundance Transport, Inc.",
		"desc_full":" created, deployed, and currently maintain a responsive website for Sundance using the Bootstrap framework. The website features an animated logo, a secure contact form, and custom glyphicons.",
		"cover_img":sti_home,
		"cover_gif":sti_gif,
		"date_start":"Summer 2017",
		"date_end":"Present",
		"link":"https://sundancetransportinc.com",
		"tags":["website"]
	},{
		"name":"Truck Routing Application",
		"desc_short":"For my senior project at SCU, I developed a tool to help dispatchers efficiently route trucks",
		"desc_full":"This application provides dispatchers with a tool to route a fleet of trucks efficiently. This application seeks to provide a simple, powerful tool that can help dispatchers perform their jobs more efficiently and contribute to the reduction of fuel consumption, carbon emissions, and vehicle maintenance costs.",
		"cover_img":tra_home,
		"cover_gif":tra_gif,
		"date_start":"Sept 2019",
		"date_end":"June 2020",
		"link":"https://tra.amiller.space",
		"tags":["website","full-stack"]
	},{
		"name":"uBridge Splash Page",
		"desc_short":"I helped design the splash page for a startup called uBridge",
		"desc_full":"This is the splash page for a startup called uBridge that I worked on with a team of my peers at Santa Clara University. The project is discontinued and the links on the page have been disabled, but I decided to upload it as an example of a splash page I've designed.",
		"cover_img":ubs_home,
		"cover_gif":ubs_gif,
		"date_start":"January 2018",
		"date_end":"November 2019",
		"link":"https://babaganoosh76.github.io/ubridge-splash/",
		"tags":["website"]
	},{
		"name":"Cost Projection Database",
		"desc_short":"",
		"desc_full":"",
		"cover_img":cpd_home,
		"date_start":"Summer 2018",
		"date_end":"",
		"link":"",
		"tags":["full-stack"]
	}]

	const list = items.map(function(item, k){
		return (
			<li className="pf-wrap" tags="{{ item.tags|join(' ') }}">
				<h2>{ item.name }</h2>
				<p><i>{ item.date_start } - { item.date_end }</i></p>
				<Link to={{
					pathname: '/project',
					state: {project: 'Testing123'}
				}} className="pf-cover">
					<img className="pf-img shadow" src={ item.cover_img } />
					<img className="pf-img pf-gif" src={ item.cover_gif } />
				</Link>
				{/*<p>tags: { item.tags }</p>*/}
				<p>{ item.desc_short }</p>
				<Link to="/project"><p>//&ensp;Details&ensp;//</p></Link>
			</li>
		)
	})

	return (
		<div>
			<header>
				<img id="logo" src={ logo } draggable="false" />
			</header>

			<div className="container">
				<div className="heading">
					<span className="slash"></span><h1>Portfolio</h1><span className="slash"></span>
				</div>
				
				<p className="blurb">Check out all of my work!</p>
				<br />
				<div style={{'text-align':'center'}}>
					<label>Filter by project type:</label>
					<select>
						<option>All</option>
						<option>Websites</option>
						<option>Full-Stack Applications</option>
						<option>Self-Driven Projects</option>
					</select>
				</div>

				<ul id="portfolio" className="grid">
					{ list }
				</ul>
				
			</div>
		</div>
	)
}

export default Portfolio;