import React, { PropTypes } from 'react';

const Item = ({
  text,
  completed,
  handleClick,
}) => {
  return (
    <div className="item">
      <p
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={handleClick}
      >
        {text}
      </p>
    </div>
  );
};
Item.propTypes = {
  completed: PropTypes.bool,
  handleClick: PropTypes.func,
  text: PropTypes.string,
};

export default Item;
