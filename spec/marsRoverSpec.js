describe("Valid Input", function() {
	var rover;
	beforeEach(function() {
	rover = new Rover('5 5', '3 3 E', 'MMRMMMMRMRRM');
   }) 
  describe("Rover Location Input", function() {
    it("Location is two digits and a letter", function() {
      expect(rover.xCoordinate).toEqual(3);
      expect(rover.yCoordinate).toEqual(3);
      expect(rover.orientation).toEqual('E');
    });
});
  describe("Rover Gridsize Input", function() {
  	it("Gridsize is two digits", function() {
  		expect(rover.gridX).toEqual(5);
  		expect(rover.gridY).toEqual(5);
  	});
  });
  describe("Instructions Input", function() {
    it("Instructions are a string of characters L, M and R only", function() {
      expect(rover.instructions).toEqual('MMRMMMMRMRRM');
    });
  });
});

describe("Valid Moves", function() { 
  describe("Correct move when facing east, inside grid", function() {
    it("Increases x coordinate and keeps facing east", function() {
      var rover = new Rover('5 5', '3 3 E', 'M');
      rover.move();
      expect(rover.xCoordinate).toEqual(4);
      expect(rover.yCoordinate).toEqual(3);
      expect(rover.orientation).toEqual('E')
    });
});
  describe("Correct move when facing east, at border", function() {
      var rover = new Rover('5 5', '5 3 E', 'M');
      rover.move();
    it("Should not increase x, but keep facing east", function() {
      expect(rover.xCoordinate).toEqual(5);
      expect(rover.yCoordinate).toEqual(3);
      expect(rover.orientation).toEqual('E')
    });
  });
});

describe("Valid Rotations", function() { 
  describe("Correct orientation change when facing north", function() {
    it("Faces west after left turn", function() {
      var rover = new Rover('5 5', '3 3 N', 'M');
      rover.rotate('L');
      expect(rover.orientation).toEqual('W');
    });
    it("Faces east after right turn", function() {
      var rover = new Rover('5 5', '5 3 N', 'M');
      rover.rotate('R');
      expect(rover.orientation).toEqual('E');
    });
});

});describe("Valid Execution of Instructions", function() { 
  describe("The output gives correct final position", function() {
    it("Final position is correct", function() {
      var rover = new Rover('5 5', '3 3 E', 'MMRMMRMRRM');
      expect(rover.executeInstructions()).toEqual('5 1 E');
    });
    it("Final position is correct", function() {
      var rover = new Rover('5 5', '1 2 N', 'LMLMLMLMM');
      expect(rover.executeInstructions()).toEqual('1 3 N');
    });
});
});
