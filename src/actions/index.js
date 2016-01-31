let nextId = 0;
export const addItem = (tree, text) => {
  tree.push('list', {
    id: nextId++,
    completed: false,
    text,
  })
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
