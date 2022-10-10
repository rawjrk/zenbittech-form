export const loadJSON = (key) => JSON.parse(localStorage.getItem(key));

export const saveJSON = (key, val) =>
  localStorage.setItem(key, JSON.stringify(val));
