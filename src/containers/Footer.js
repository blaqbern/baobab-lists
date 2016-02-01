import React, { Component, PropTypes } from 'react';
import { branch } from 'baobab-react/higher-order';
import * as actions from '../actions';
import Filter from '../components/Filter';

class Footer extends Component {
  render() {
    const { tags } = this.props;
    const { setVisibilityFilter } = this.props.actions;
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
                    () => setVisibilityFilter(tag)
                  }
                />
              </li>
          )}
          <li>
            <Filter
              filter={'SHOW_ALL'}
              handleClick={
                () => setVisibilityFilter('SHOW_ALL')
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
    setVisibilityFilter: actions.setVisibilityFilter
  },
});
