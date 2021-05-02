import React from 'react';
import { Link } from 'react-router-dom';

function DynamicLink(props) {
	if (!props.href)
		return (<div>{ props.children }</div>)
	if (props.href.includes(':'))
		return (<a href={ props.href } target="_blank" rel="noreferrer">{ props.children }</a>)
	if (props.href.includes('static'))
		return (<a href={ props.href } target="_blank" rel="noreferrer">{ props.children }</a>)
	return (<Link to={ props.href }>{ props.children }</Link>)
}

export default DynamicLink