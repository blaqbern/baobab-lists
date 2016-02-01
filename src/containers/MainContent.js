import React, { Component, PropTypes } from 'react';
import Item from '../components/Item';
import AddNew from '../components/AddNew';
import Footer from '../components/Footer';
import { branch } from 'baobab-react/higher-order';
import * as actions from '../actions';

class MainContent extends Component {
  getVisibleItems(items, visibilityFilter) {
    return items.filter(
      (item) =>
        visibilityFilter === 'SHOW_ALL' ||
        item.tags.indexOf(visibilityFilter) !== -1
    );
  }
  render() {
    const { list, visibilityFilter } = this.props;
    const {
      addItem,
      removeItem,
      toggleCompleted,
      addTag
    } = this.props.actions;

    const visibleItems = this.getVisibleItems(list, visibilityFilter);
    return (
      <div className="main-content">
        <AddNew
          what="item"
          handleAddClick={
            (text) => addItem(text)
          }
        />
        <ul>
          {visibleItems.map((item) =>
            <li key={item.id}>
              <Item
                text={item.text}
                completed={item.completed}
                handleClick={
                  () => toggleCompleted(item.id)
                }
                tags={item.tags}
              />
              <button
                onClick={
                  () => removeItem(item.id)
                }
              >
                {'remove'}
              </button>
              <AddNew
                what={'custom tag'}
                handleAddClick={
                  (tag) => addTag(item.id, tag)
                }
              />
            </li>
          )}
        </ul>
        <Footer />
      </div>
    );
  }
}
MainContent.contextTypes = { store: PropTypes.object };

export default branch(MainContent, {
  cursors: {
    list: ['list'],
    visibilityFilter: ['visibilityFilter'],
    tags: ['tags'],
  },
  actions: {
    addItem: actions.addItem,
    removeItem: actions.removeItem,
    toggleCompleted: actions.toggleCompleted,
    addTag: actions.addTag,
  },
});
