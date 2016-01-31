let nextId = 0;
export const addItem = (tree, text) => {
  tree.push('list', {
    id: nextId++,
    completed: false,
    text,
    tags: [],
  });

  tree.set('visibilityFilter', 'SHOW_ALL');
};

export const removeItem = (tree, id) => {
  tree.set('list',
    tree.get('list').filter((item) => id !== item.id)
  );
};

export const toggleCompleted = (tree, id) => {
  tree.set('list',
    tree.get('list').map(
      (item) => {
        if(item.id === id) {
          return Object.assign({}, item, {
            completed: !item.completed
          });
        }
        return item;
      }
    )
  );
};

export const addTag = (tree, id, tag) => {
  tree.set('list',
    tree.get('list').map(
      (item) => {
        if(item.id === id) {
          return Object.assign({}, item, {
            tags: [
              ...item.tags,
              tag
            ]
          });
        }
        return item;
      }
    )
  );
  tree.set('tags', [
    ...tree.get('tags'),
    tag
  ])
};

export const setVisibilityFilter = (tree, filter) => {
  tree.set('visibilityFilter', filter);
};
