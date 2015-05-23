var grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 
    gridTwo = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

var Piece = can.Construct.extend({
}, {
    init: function(x, y) {
        this.x = x;
        this.y = y;
        this.position = grid[x][y];        
    }
});

for (var i = 0; i < 3; i++) {
  var rand = ((Math.random() * 10) + 1);
  var pawn = new Piece(i, rand);
  gridTwo[i][i] = rand;
}

console.log(gridTwo);
