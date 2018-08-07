class Plane {
  constructor() {
    this.airport = null
  };
  land(airport) {
    if (this.airport != null) {
      throw new Error("cannot land already in airtport");
    }
    else if(airport.weather > 7) {
      throw new Error("cannot land due to storm")
    }
    else {
      this.airport = airport;
    }
  };
  takeOff(airport) {
    if(this.airport == null) {
      throw new Error("Plane not in airport");
    }
    else if(airport.weather > 7) {
      throw new Error("cannot take off due to storm")
    }
    else {
      this.airport = null;
    }
  };
};
