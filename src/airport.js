class Airport {
  constructor() {
    this.capacity = 12;
    this.planes = [];
  };
  setDefaultCapacity(value) {
    this.capacity = value;
  };
  showCapacity() {
    return this.capacity;
  }
  weather() {
    var currentWeather = Math.floor((Math.random() * 11));
    return currentWeather;
  };
  landPlane(plane) {
    if(this.planes.length >= this.capacity) {
      throw new Error("cannot land airport full");
    }
    else if(this.weather() > 7) {
      throw new Error("cannot land due to storm")  
    }
    else {
      this.planes.push(plane);
    }
  };
  takeOffPlane(plane) {
    if(this.weather > 7) {
      throw new Error("cannot take off due to storm")  
    }
    else {
      this.planes.splice(this.planes.indexOf(plane));
    }
  };
  planeList() {
    return this.planes;
  };

};
