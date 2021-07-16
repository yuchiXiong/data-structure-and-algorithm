/**
 * @param {string[]} board
 * @return {boolean}
 * 
 * ! 1. 执棋顺序决定了O棋和X棋的差距不大于1
 * ! 2. 当X已胜利时，O的数量 = X的数量 - 1
 * ! 3. 当O已胜利时，O的数量 = X的数量
 * ! 4. 当有8个棋子为空时，剩下的1个棋子应该是X（X先手）
 */
var validTicTacToe = function (board) {
  const validChar = [" ", "O", "X"];
  let result = null;
  let isWin = "";
  const charMap = {
    " ": 0,
    O: 0,
    X: 0,
  };
  for (let i = 0; i < 3; i += 1) {
    // 0. 如果此时的3个字符本身就是一样的，则为横向三连，游戏结束
    if (board[i] === "XXX") {
      isWin !== "X" && (isWin = "X");
    } else if (board[i] === "OOO") {
      isWin !== "X" && (isWin = "O");
    }

    board[i].split("").forEach((item, index) => {
      // 0.1 当i为1时，判断，上下是否纵向三连，游戏结束
      if (i === 1) {
        if (board[i - 1][index] === item && item === board[i + 1][index]) {
          isWin !== "X" && (isWin = item);
        }
        if (index === 1) {
          if (
            (item === board[i - 1][index - 1] &&
              item === board[i + 1][index + 1]) ||
            (item === board[i - 1][index + 1] &&
              item === board[i + 1][index - 1])
          ) {
            isWin !== "X" && (isWin = item);
          }
        }
      }

      charMap[item] += 1;
    });
  }
  if (result === false) {
    return result;
  }
  console.log(charMap);
  if (Object.keys(charMap).some((item) => !validChar.includes(item))) {
    // 1. 存在不合法的字符
    result = false;
  } else if (
    (isWin === "X" && charMap["X"] !== charMap["O"] + 1) ||
    (isWin === "O" && charMap["X"] !== charMap["O"]) ||
    charMap["X"] < charMap["O"] ||
    charMap["X"] - charMap["O"] > 1
  ) {
    // 2. 顺序不合理
    result = false;
  } else if (charMap[" "] === 8 && charMap["X"] !== 1) {
    // 3. 不是 O 先手
    result = false;
  } else {
    result = true;
  }

  return result;
};

let board = ["O  ", "   ", "   "];
console.log(validTicTacToe(board)); // false 第一个玩家总是放置“X”。

board = ["XOX", " X ", "   "];
console.log(validTicTacToe(board)); // false 玩家应该是轮流放置的。

board = ["XXX", "   ", "OOO"];
console.log(validTicTacToe(board)); // false

board = ["XOX", "O O", "XOX"];
console.log(validTicTacToe(board)); // true

board = ["XOX", "O9O", "XOX"];
console.log(validTicTacToe(board)); // false

board = ["XXX", "OOX", "OOX"];
console.log(validTicTacToe(board)); // true

board = ["OXX", "XOX", "OXO"];
console.log(validTicTacToe(board)); // false

board = ["XXX", "OOO", "  O"];
console.log(validTicTacToe(board)); // false

board = ["XOX", "OX ", "OXO"];
console.log(validTicTacToe(board)); // true

board = ["OO ", "O X", "X  "];
console.log(validTicTacToe(board)); // false
