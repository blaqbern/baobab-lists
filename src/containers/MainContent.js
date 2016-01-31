import React, { Component, PropTypes } from 'react';
import Item from '../components/Item';
import AddNew from '../components/AddNew';
import { branch } from 'baobab-react/higher-order';
import * as _actions from '../actions';

class MainContent extends Component {
  getVisibleItems(items, visibilityFilter) {
    return items.filter(
      (item) =>
        visibilityFilter === 'SHOW_ALL'
    );
  }
  render() {
    const {list, visibilityFilter, actions} = this.props;
    const visibleItems = this.getVisibleItems(list, visibilityFilter);
    return (
      <div className="main-content">
        <AddNew
          what="item"
          handleAddClick={
            (text) => actions.addItem(text)
          }
        />
        <ul>
          {visibleItems.map((item) =>
            <li key={item.id}>
              <Item
                text={item.text}
                completed={item.completed}
                handleClick={
                  () => actions.toggleCompleted(item.id)
                }
                tags={item.tags}
              />
              <button
                onClick={
                  () => actions.removeItem(item.id)
                }
              >
                {'remove'}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default branch(MainContent, {
  cursors: {
    list: ['list'],
    visibilityFilter: ['visibilityFilter'],
  },
  actions: {
    addItem: _actions.addItem,
    removeItem: _actions.removeItem,
    toggleCompleted: _actions.toggleCompleted,
  },
});
