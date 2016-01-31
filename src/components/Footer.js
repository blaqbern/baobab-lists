import React, { Component, PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import * as _actions from '../actions';
import Filter from '../containers/Filter';

class Footer extends Component {
  render() {
    const { tags, actions } = this.props;
    return (
      <div className="footer">
        <h3>{"Show only items from:"}</h3>
        <ul>
          {tags.map(
            (tag, index) =>
              <li key={index}>
                <Filter
                  filter={tag}
                  handleClick={
                    () => actions.setVisibilityFilter(tag)
                  }
                />
              </li>
          )}
          <li>
            <Filter
              filter={'SHOW_ALL'}
              handleClick={
                () => actions.setVisibilityFilter('SHOW_ALL')
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}
Footer.propTypes = { tags: PropTypes.array };

export default branch(Footer, {
  cursors: {
    tags: ['tags']
  },
  actions: {
    setVisibilityFilter: _actions.setVisibilityFilter
  },
});
