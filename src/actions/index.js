export const increment = (tree) => {
  tree.set('counter', tree.get('counter') + 1);
}

export const decrement = (tree) => {
  tree.set('counter', tree.get('counter') - 1);
}
