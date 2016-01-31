import React, { PropTypes } from 'react';

const AddNew = ({
  handleAddClick,
  what,
}) => {
  let inputText;
  return (
    <div>
      <input ref={(node) => inputText = node} />
      <button
        onClick={
          () => {
            handleAddClick(inputText.value.trim());
            inputText.value = '';
          }
        }
      >
        {`add new ${what}`}
      </button>
    </div>
  );
};
AddNew.propTypes = {
  handleAddClick: PropTypes.func,
  what: PropTypes.string,
};

export default AddNew;
