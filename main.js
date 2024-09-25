```

So upon closer inspection what i want is a visualize the 
process and to do a chess board dynamic dom and host of other complex feets we would
be beyond the scope of learning but  we will document the process and look for more ways to 
visualize the process. 

These are the eight possible moves the knight can make from any position on the board. The format [x, y] represents the change in the x and y coordinates when the knight moves (where x is the row and y is the column on a chessboard).

For example, [1, 2] means moving one square in the x-direction and two squares in the y-direction, and [-2, -1] means moving two squares left (x-direction) and one square up (y-direction).

Explanation of BFS:
Queue: The queue is used to explore each possible path in the order they are added. Initially, it contains only the starting position.
Visited Set: This keeps track of all positions that have already been explored to avoid cycles and redundant moves.
Loop: The loop continues until a path to the goal is found or all possibilities are exhausted.
Path: Each element in the queue is an array (a path) that represents the sequence of positions leading to the current position.
If goal reached: When the goal position matches the current position, it returns the path that leads to the goal.

```

const possibleMoves = [
    [1, 2], [1, -2], [-1, 2], [-1, -2], 
    [2, 1], [2, -1], [-2, 1], [-2, -1]
  ];
  

  function bfs(start, goal) {
    const queue = [[start]];
    const visited = new Set();
    
    visited.add(start.toString());
    
    while (queue.length > 0) {
      const path = queue.shift();    // Take the first path in the queue
      const currentPos = path[path.length - 1];  // Current position is the last element in the path
  
      if (currentPos.toString() === goal.toString()) {
        return path;  // If we reach the goal, return the path to it
      }
      
      // For each possible knight move:
      for (const move of possibleMoves) {
        const nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]]; // Calculate the next position
  
        // Ensure nextPos is within the bounds of the chessboard and hasn't been visited
        if (nextPos[0] > -1 && nextPos[0] < 8 && nextPos[1] > -1 && nextPos[1] < 8 && !visited.has(nextPos.toString())) {
          visited.add(nextPos.toString());  // Mark the position as visited
          queue.push([...path, nextPos]);  // Add this new path to the queue
        }
      }
    }
    return null;  // If no path is found, return null
  }
  
  const result = bfs(initialPos, finalPos);
console.log(`Knight goes from ${initialPos} -> ${finalPos} in ${result.length - 1} moves, which are:`,);
console.log(result);
return result;
