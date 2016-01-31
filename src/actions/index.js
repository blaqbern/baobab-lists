let nextId = 0;
export const addItem = (tree, text) => {
  tree.push('list', {
    id: nextId++,
    text
  })
};

export const removeItem = (tree, id) => {
  tree.set('list',
    tree.get('list').filter((item) => id !== item.id)
  );
};

export const toggleCompleted = (tree, id) => {
  
};
