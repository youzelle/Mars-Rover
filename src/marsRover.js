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
    switch (this.orientation) {
      case 'W': {
        let orient = this.xCoordinate - 1;
        let coord = 0;
        if (this.isClear(orient, coord) && orient >= 0){
          this.xCoordinate--;
        } else if (orient >= 0) {
          alert( 'Invalid Move West at ' + this.xCoordinate +","+ this.yCoordinate )
          this.xCoordinate;
        } else {
          return false;
        }
        break;
      }
      case 'N': {
        let orient = this.yCoordinate + 1;
        let coord = 1;
        if (this.isClear(orient, coord) && orient <= this.gridY) {
        this.yCoordinate++;
        } else if (orient <= this.gridY) {
          alert( 'Invalid Move North at ' + this.xCoordinate +","+ this.yCoordinate )
          this.yCoordinate;
        } else {
          return false;
        }
        break;
      }
      case 'E': {
        let orient = this.xCoordinate + 1;
        let coord = 0;
        if (this.isClear(orient, coord) && orient <= this.gridX) {
        this.xCoordinate++;
        } else if (orient <= this.gridX) {
          alert( 'Invalid Move East at ' + this.xCoordinate +","+ this.yCoordinate )
          this.xCoordinate;
        } else {
          return false;
        }
        break;
      }
      case 'S': {
        let orient = this.yCoordinate - 1
        let coord = 1;
      if (this.isClear(orient, coord) && orient >= 0) {
        this.yCoordinate--;
      } else if (this.yCoordinate - 1 >= 0) {
        alert( 'Invalid Move South at ' + this.xCoordinate +","+ this.yCoordinate )
        this.yCoordinate;
      } else {
        return false;
      }
        break;
      }
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
    let instructions = this.instructions.split('');
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case 'M':
        this.move();
        if (this.move() === false) {
          break;
        }
        break;
        case 'R':
        this.rotate('R');
        break;
        case 'L':
        this.rotate('L');
        break;
      }
    }
    return `${this.xCoordinate} ` + `${this.yCoordinate} ` + `${this.orientation}`;
  }

}

var rover = new Rover('5 5', '3 3 E', 'MMM');

//console.log(rover.executeInstructions())

