/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  return Object.keys(names.reduce((result, name) => {
    if (result[name] === undefined) {
      result[name] = name;
    } else {
      let k = 1;
      let newName = `${name}(${k})`;

      while (result[newName] !== undefined) {
        k += 1;
        newName = `${name}(${k})`;
      }

      result[newName] = newName;
    }

    return result;
  }, {}));
};