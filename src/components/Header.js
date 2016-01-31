import React, { PropTypes } from 'react';

const Header = ({ title }) => (<h1>{title}</h1>);
Header.propTypes = { title: PropTypes.string };

export default Header;
