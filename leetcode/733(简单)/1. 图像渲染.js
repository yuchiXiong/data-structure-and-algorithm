/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color, oldColor = image[sr][sc]) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return image;
  if (image[sr][sc] === color || image[sr][sc] !== oldColor) return image;
  image[sr][sc] === oldColor && (image[sr][sc] = color);

  floodFill(image, sr - 1, sc, color, oldColor); // 0, 1
  floodFill(image, sr + 1, sc, color, oldColor); // 2, 1
  floodFill(image, sr, sc - 1, color, oldColor); // 1, 0
  floodFill(image, sr, sc + 1, color, oldColor); // 1, 2

  return image;
};

// [[2,2,2],[2,2,0],[2,0,1]]
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2));