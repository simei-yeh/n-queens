/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});

  for (let i = 0; i < n; i++) {
    solution.togglePiece(i, i);
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 1;
  for (var i = 1; i <= n; i++) {
    solutionCount *= i;
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var board = new Board({'n': n});
  var board = new Board({'n': n});
  var isFound = false;
  // declare row and col index as variables starting at 0
  var row = 0;
  // var col = 0;

  // recursive helper function:  playNextMove (col)
  var playNextMove = function(row, col) {
    if (isFound) { return board; }
    // toggle at row, col index
    //   if on last row
    if (row === solution.get('n') - 1) {
      board = solution;
      isFound = true;
      return board;
    }
    //     row++
    var currentRow = row + 1;
    //     iterate from 0 to n - 1
    for (var i = 0; i < solution.get('n'); i++) {
      if (isFound) { return board; }
      //       if i = current column, skip it
      if (i === col) { continue; }
      solution.togglePiece(currentRow, i);
      // if no conflicts
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(currentRow, i);
        continue;
      }
      // solution.togglePiece(currentRow, i - 1);
      playNextMove(currentRow, i);
      if (isFound) { return board; }
      solution.togglePiece(currentRow, i);
    }
  };

  for (var i = 0; i < n; i++) {
    if (isFound) { return board.rows(); }
    var solution = new Board({'n': n});
    solution.togglePiece(0, i);
    playNextMove(0, i);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

  return board.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  let queens = 0;




  console.log('Number of solutions for ' + n + ' queens:', solutionCount);


  return solutionCount;
};

