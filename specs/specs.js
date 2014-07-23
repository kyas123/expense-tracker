describe("Tamagotchi", function() {
  describe("initialize", function() {
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("panda bear");
      myPet.name.should.equal("panda bear");
      myPet.foodLevel.should.equal(25);
      myPet.sleepLevel.should.equal(25);
      myPet.activityLevel.should.equal(25);
    });
  });

  describe("timePasses", function() {
    it("decreases the amount of food the Tamagotchi has left by 1", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("panda bear");
      myPet.timePasses();
      myPet.foodLevel.should.equal(24);
    });
  });

  describe("isAlive", function() {
    it("is alive if the food level is above 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("panda bear");
      myPet.isAlive().should.equal(true);
    });

    it("is dead if the food level is 0", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
  });

  describe("isTired", function() {
    it("is tired if the sleep level is less than 10", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("panda bear");
      myPet.sleepLevel = 9;
      myPet.isTired().should.equal(true);
    });
  });

  describe("isHungry", function() {
    it("is hungry if the food level is less than 5", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("panda bear");
      myPet.foodLevel = 4;
      myPet.isHungry().should.equal(true);
    });
  });

  describe("passOut", function() {
    it("will pass out if the food level is below 3", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("panda bear");
      myPet.foodLevel = 1;
      myPet.passOut().should.equal(true);
    });
  });
});
