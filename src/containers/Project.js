import logo from '../static/logo_full.svg';

function Project(props) {

	let name = props.location.state.project

	return (
		<div class="container pf-entry">
			<div class="heading">
				<span class="slash"></span><h1>{ name }</h1><span class="slash"></span>
			</div>
		</div>
	)
}

export default Project;