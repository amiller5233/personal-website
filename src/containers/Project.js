import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../static/logo_full.svg';

function Project(props) {

	let project = props.location.state.project

	let link = project.link?<a href={ project.link } target="example"><p>//&ensp;View it live&ensp;//</p></a>:null

	return (
		<div>
			<Link to="/">
				<img src={ logo } draggable="false" width="300" alt="Adam Miller's logo" style={{'padding':'20px'}}/>
			</Link>
			<div className="container pf-entry">
				<div className="heading">
					<span className="slash"></span><h1>{ project.name }</h1><span className="slash"></span>
				</div>
				<p><i>{ project.date_start }{ project.date_end?' - '+project.date_end:null }</i></p>
				<hr className="short" />
				<p className="blurb">{ project.desc_full }</p>
				<img className="shadow" src={ project.cover_gif || project.cover_img } width="500" alt={'image of '+project.name+' project'}/>
				{ link }
			</div>
		</div>
	)
}

export default Project;