describe("Plane", function(){

  var plane, airport, name;

  beforeEach(function() {
    airport = {
      setBar: function(value) {
        name = value;
      },
      getBar: function() {
        return name;
      }
    };
    plane = new Plane();
  });

  describe("Plane land function", function(){
    it('Plane is not in airport when not landed', function() {
      expect(plane.airport).toEqual(null);
    });
    it('Plane lands at correct airport', function() {
      plane.land(airport);
      expect(plane.airport).toEqual(airport);
      expect(plane.airport.name).toEqual(name);
    });
  });
  describe("Plane takeoff function", function() {
    it("Plane can take off from airport if in airport", function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(plane.airport).toEqual(null);
    });
    it("Plane cannot take off if not in airport", function() {
      expect( function() { plane.takeOff(airport) } ).toThrow(new Error("Plane not in airport"));
    });
  })
  describe("adverse weather conditions", function() {
    describe("Plane cannot take off in bad weather", function() {

    });
    describe("Plane cannot land in bad weather", function() {

    });
  });
});