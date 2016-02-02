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
  const formattedTag = tag.replace(' ', '_').toUpperCase();
  tree.set('list',
    tree.get('list').map(
      (item) => {
        if(item.id === id) {
          if(!item.tags.includes(formattedTag)) {
            return Object.assign({}, item, {
              tags: [
                ...item.tags,
                formattedTag
              ]
            });
          }
        }
        return item;
      }
    )
  );

  const currentTags = tree.get('tags');
  if(!currentTags.includes(formattedTag)) {
    tree.set('tags', [
      ...currentTags,
      formattedTag
    ]);
  }
};

export const setVisibilityFilter = (tree, filter) => {
  tree.set('visibilityFilter', filter);
};
