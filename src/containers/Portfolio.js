import logo from '../static/logo_full.svg';


import sti_home from '../static/sti/sti_home.png';
import sti_gif from '../static/sti/sti_gif.gif';


function Portfolio() {

	var items = [{
		"name":"Sundance Transport Website",
		"desc_short":"I designed the company splash page for Sundance Transport",
		"desc_full":" created, deployed, and currently maintain a responsive website for Sundance using the Bootstrap framework. The website features an animated logo, a secure contact form, and custom glyphicons.",
		"cover_img":sti_home,
		"cover_gif":sti_gif,
		"date_start":"Summer 2017",
		"date_end":"Present",
		"link":"https://sundancetransportinc.com",
		"tags":["website"]
	},{
		"name":"Truck Routing Application",
		"desc_short":"For my senior project at SCU, I created a tool to help dispatchers route their trucks more efficiently",
		"desc_full":"This application provides dispatchers with a tool to route a fleet of trucks efficiently. This application seeks to provide a simple, powerful tool that can help dispatchers perform their jobs more efficiently and contribute to the reduction of fuel consumption, carbon emissions, and vehicle maintenance costs.",
		"cover_img":"tra/tra_home.png",
		"cover_gif":"tra/tra_gif.gif",
		"date_start":"Sept 2019",
		"date_end":"June 2020",
		"link":"https://tra.amiller.space",
		"tags":["website","full-stack"]
	},{
		"name":"uBridge Splash Page",
		"desc_short":"I helped design the splash page for a startup called uBridge",
		"desc_full":"This is the splash page for a startup called uBridge that I worked on with a team of my peers at Santa Clara University. The project is discontinued and the links on the page have been disabled, but I decided to upload it as an example of a splash page I've designed.",
		"cover_img":"ubs/ubs_home.png",
		"cover_gif":"ubs/ubs_gif.gif",
		"date_start":"January 2018",
		"date_end":"November 2019",
		"link":"https://babaganoosh76.github.io/ubridge-splash/",
		"tags":["website"]
	},{
		"name":"Cost Projection Database",
		"desc_short":"",
		"desc_full":"",
		"cover_img":"cpd/home.png",
		"date_start":"Summer 2018",
		"date_end":"",
		"link":"",
		"tags":["full-stack"]
	}]

	const list = items.map(function(item, k){
		return (
			<li class="pf-wrap" tags="{{ item.tags|join(' ') }}">
				<h2>{ item.name }</h2>
				<p><i>{ item.date_start } - { item.date_end }</i></p>
				<a class="pf-cover" href="{{ url_for('splash.pf_details', pid=code) }}">
					<img class="pf-img shadow" src={ item.cover_img } />
					<img class="pf-img pf-gif" src={ item.cover_gif } />
				</a>
				<p>tags: { item.tags }</p>
				<p>{ item.desc_short }</p>
				<a href="{{ url_for('splash.pf_details', pid=code) }}"><p>//&ensp;Details&ensp;//</p></a>
			</li>
		)
	})

	return (
		<div>
			<header>
				<img id="logo" src={ logo } draggable="false" />
			</header>

			<div class="container">
				<div class="heading">
					<span class="slash"></span><h1>Portfolio</h1><span class="slash"></span>
				</div>
				
				<p class="blurb">Check out all of my work!</p>
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

				<ul id="portfolio" class="grid">
					{ list }
				</ul>
				
			</div>
		</div>
	)
}

export default Portfolio;