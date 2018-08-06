describe("Airport", function() {

  var airport, plane;

  beforeEach(function() {
    plane = {
      setBar: function(value) {
        planeAirport = value;
      },
      getBar: function() {
        return planeAirport;
      }
    };
     airport = new Airport();
  });

  describe("weather", function() {
    beforeEach(function() {
      spyOn(Math, 'random').and.returnValue(10);
    })
    it("has a weather varaible of less than 10", function() {
      expect(airport.weather()).toEqual(10);
    })
    it("does not land planes in bad weather", function() {
      expect( function() { airport.landPlane(plane) } ).toThrow(new Error("cannot land due to storm"));
    });
    it("does not take off planes in bad weather", function() {

    });
    it("does not land planes if full", function() {

    });
  });
  describe("Capacity", function() {
    it("has the correct default capacity", function() {
      expect(airport.showCapacity()).toEqual(12);
    });
    it("can change default capacity", function() {
      airport.setDefaultCapacity(20);
      expect(airport.showCapacity()).toEqual(20);
    });
  });
  describe("plane actions", function() {
    beforeEach(function() {
      airport.landPlane(plane);
      spyOn(Math, 'random').and.returnValue(1);
      expect(airport.weather()).toEqual(111);
    })
    describe("landPlane", function() {
      it("adds a plane to list if it lands", function() {
        expect(airport.planeList().pop()).toEqual(plane);
      });
    });
    describe("takeOffPlane", function() {
      it("removes a plane from list if it takes off", function() {
        airport.takeOffPlane(plane);
        expect(airport.planeList()).toEqual([])
      });
    });
  });
});
