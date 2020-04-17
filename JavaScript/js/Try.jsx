import React, { Component } from 'react';

class Try extends Component{
	render() {
		return (
		<li>
			<b>{this.props.value.fruit}</b> - {this.props.index}
			<div>콘텐츠</div>
			<div>콘텐츠1</div>
			<div>콘텐츠2</div>
		</li>
		);
	}
}

export default Try;
