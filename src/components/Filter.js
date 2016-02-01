import React, { PropTypes} from 'react';

const Filter = ({
  filter,
  handleClick
}) => {
  return (
    <div onClick={handleClick}>
      {filter}
    </div>
  );
}
Filter.propTypes = { filter: PropTypes.string };

export default Filter;
