let obstacles = [[2, 2], [3, 1], [5, 3]];

class Rover {
  constructor (gridSize, location, instructions) {
    if (!(/^\d\s\d\s?$/).test(gridSize)) {
      alert('Invalid Grid Size');
    }

    if (!(/^\d\s\d\s[NEWS]$/).test(location)) {
      alert('Invalid Rover Coordinates');
    }

    if (!(/^[LMR]*$/).test(instructions)) { 
      alert('Invalid Instructions');
    }

    this.xCoordinate = parseInt(location.charAt(0));
    this.yCoordinate = parseInt(location.charAt(2));
    this.orientation = location.charAt(4);
    this.gridX = parseInt(gridSize.charAt(0));
    this.gridY = parseInt(gridSize.charAt(2));
    this.instructions = instructions;
    this.travelLog = [];
  }

  isClear (orient, coord) {
    for (let i = 0; i < obstacles.length; i++) {
      if (orient == obstacles[i][coord]) {
        alert('Obstacle, cannot move forward');
        return false;
      }
    }
    return true;
  }

  move () {
    let orient;
    let coord;
    let insideBoundaries;
    let changeCoordinate;

    switch (this.orientation) {
      case 'W': {
        orient = this.xCoordinate - 1;
        coord = 0;
        insideBoundaries = orient >= 0;
        changeCoordinate = () => {
          this.xCoordinate--;
        };

        break;
      }
      case 'N': {
        orient = this.yCoordinate + 1;
        coord = 1;
        insideBoundaries = orient <= this.gridY;
        changeCoordinate = () => {
          this.yCoordinate++;
        };

        break;
      }
      case 'E': {
        orient = this.xCoordinate + 1;
        coord = 0;
        insideBoundaries = orient <= this.gridX;
        changeCoordinate = () => {
          this.xCoordinate++;
        };

        break;
      }
      case 'S': {
        orient = this.yCoordinate - 1;
        coord = 1;
        insideBoundaries = orient >= 0;
        changeCoordinate = () => {
          this.yCoordinate--;
        };
        break;
      }
    }

    console.group();
    console.log('this.orientation', this.orientation);
    console.log('insideBoundaries', insideBoundaries);
    console.log('orient', orient);
    console.log('coord', coord);
    console.groupEnd();
    
    // Tries to make the move
    if (insideBoundaries && this.isClear(orient, coord)) {
      changeCoordinate();
    } else {
      return false;
    }

    return [this.xCoordinate, this.yCoordinate];
  }

  rotate (dir) {
    const bearings = ['N', 'E', 'S', 'W'];
    let bearingsIndex = bearings.indexOf(this.orientation);
    if (dir === 'L') {
      bearingsIndex = (bearingsIndex + 7) % 4;
    } else if (dir === 'R') {
      bearingsIndex = (bearingsIndex + 5) % 4;
    }
    this.orientation = bearings[bearingsIndex];
    return this.orientation;
  }

  executeInstructions () {
    const instructions = this.instructions.split('');
    let stop;
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case 'M':
        if(this.move() === false) {
          stop = true;
        }
        break;
      case 'R':
        this.rotate('R');
        break;
      case 'L':
        this.rotate('L');
        break;
      }

      if(stop) {
        break;
      }
    }

    return `${this.xCoordinate} ` + `${this.yCoordinate} ` + `${this.orientation}`;
  }
}

var rover = new Rover('5 5', '3 3 E', 'MMM');

var rover2 = new Rover('5 5', '3 2 E', 'M');
console.log(rover2.executeInstructions()); 

console.log(rover.executeInstructions()); 

