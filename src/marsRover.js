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
  }

  move () {
    switch (this.orientation) {
      case 'W': {
        if (this.xCoordinate - 1 >= 0){
        this.xCoordinate--;
        } else {
          alert( 'Invalid Move: West')
          this.xCoordinate;
        }
        break;
      }
      case 'N': {
        if (this.yCoordinate + 1 <= this.gridY) {
        this.yCoordinate++;
        } else {
          alert( 'Invalid Move: North')
          this.yCoordinate;
        }
        break;
      }
      case 'E': {
        if (this.xCoordinate + 1 <= this.gridX) {
        this.xCoordinate++;
        } else {
          alert( 'Invalid Move: East')
          this.xCoordinate;
        }
        break;
      }
      case 'S': {
      if (this.yCoordinate - 1 >= 0) {
        this.yCoordinate--;
      } else {
        alert( 'Invalid Move: South')
        this.yCoordinate;
      }
        break;
      }
    }
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
          console.log(instructions, instructions[i])
      switch (instructions[i]) {
        case 'M':
        this.move();
        break;
        case 'R':
        this.rotate('R');
        break;
        case 'L':
        this.rotate('L');
        break;
      }
    console.log(this.xCoordinate, this.yCoordinate, this.orientation)
    }
    return `${this.xCoordinate} ` + `${this.yCoordinate} ` + `${this.orientation}`;
  }

}

