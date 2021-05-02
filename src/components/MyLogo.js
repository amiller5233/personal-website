import React from 'react';
import anime from 'animejs/lib/anime.es.js';

function MyLogo(props) {

	const logoStyle = {
		opacity: props.animate?0:1
	}

	React.useEffect(function(){
		if (props.animate) {
			anime({
				targets: '#logo',
				opacity: {value: [0,1], duration: 2500, easing: 'linear'},
				translateY: {value: [40,0], duration: 1200, easing: 'easeOutCubic'},
			})
			anime({
				targets: '#logo line, #logo polyline, #logo path',
				strokeDashoffset: [anime.setDashoffset, 0],
				duration: 1000,
				delay: anime.stagger(200, {direction: 'reverse'}),
				easing: 'easeOutCubic',
			})
		}
	})

	return (
		<header>
			<svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 80" style={logoStyle}><g id="paths_dup" data-name="paths dup"><line className="cls-1" x1="397.63" y1="40.95" x2="429.61" y2="80.33"/><path className="cls-1" d="M380.38.57H400c9.08,0,23.39,3,23.39,19.27C423.41,41.55,400,41,400,41l-19.64-.19"/><line className="cls-1" x1="380.38" y1="0.01" x2="380.38" y2="79.99"/><line className="cls-1" x1="309.31" y1="40.96" x2="348.46" y2="40.96"/><line className="cls-1" x1="309.15" y1="0.59" x2="355.71" y2="0.59"/><polyline className="cls-2" points="309.64 0.59 309.6 79.39 355.71 79.41"/><polyline className="cls-1" points="251.56 0.02 251.56 79.39 292.94 79.41"/><polyline className="cls-1" points="193.37 0.02 193.37 79.39 234.74 79.41"/><ellipse cx="7.1" cy="69.54" rx="7.1" ry="7.11"/><ellipse cx="7.1" cy="31.41" rx="7.1" ry="7.11"/><polygon points="41.04 51.46 40.57 52.6 70.57 52.58 71.03 51.44 41.04 51.46"/><polygon points="90.54 80 82.31 60.25 83.03 58.51 91.98 80 90.54 80"/><polygon points="135.5 80 104.76 6.21 105.48 4.47 136.94 80 135.5 80"/><polygon points="74.87 42.28 59.83 6.21 60.54 4.47 75.59 40.54 74.87 42.28"/><polygon points="103.59 0.02 96.17 0.02 77.42 45.02 76.71 46.73 62.85 80 70.42 80 80.47 55.77 81.18 54.05 103.59 0.02"/><polygon points="58.67 0.02 51.24 0.02 17.92 80 25.49 80 58.67 0.02"/><line className="cls-1" x1="162.38" y1="0.01" x2="162.38" y2="79.97"/></g></svg>
		</header>
	)
}

MyLogo.defaultProps = {
	animate: false
}

export default MyLogo