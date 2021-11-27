import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "kepler.gl/components";

const propTypes = {
	onSelectCity: PropTypes.func.isRequired,
};

function SelectCityViewer({ cityURL, cityConfigURL }) {
	onSelectCity = () => {
		this.props.onSelectCity(cityURL, cityConfigURL);
	};

	return (
		<Button type="submit" cta size="small" onClick={this.onSelectCity}>
			select city to view shade data
		</Button>
	);
}

SelectCityViewer.propTypes = propTypes;

export default SelectCityViewer;
