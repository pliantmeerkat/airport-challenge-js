class Plane {
  constructor() {
    this.airport = null
  };
  land(airport) {
    this.airport = airport
  };
  takeOff(airport) {
    if(this.airport == airport) {
      this.airport = null
    }
    else {
      throw new Error("Plane not in airport");
    }
  };
};
