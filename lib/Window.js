import React from 'react';
import PropTypes from 'prop-types';

require("css-loader!./Window.css");

class Window extends React.Component {
	render() {
		const { width, height, children } = this.props;

		return (
			<div style={{width, height, backgroundColor: '#333333', padding: 0, borderRadius: 4}} className="window">
				<svg width={width} height="25" viewPort="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<rect x="0" y="0"  width={width} height="25" rx="4" ry="4" fill="#dedede"/>
					<circle cx="17" cy="12" r="8" fill="#ff382d" />
					<circle cx="40" cy="12" r="8" fill="#fbdd2c" />
					<circle cx="63" cy="12" r="8" fill="#00e504" />
				</svg>
				<div style={{width, height: (height - 25), padding: 10, overflow: 'auto', textAlign: 'left'}} className="terminal">
					{children}
				</div>
			</div>
		);
	}
}

Window.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number
}

Window.defaultProps = {
	width: 600,
	height: 450
}

export default Window;