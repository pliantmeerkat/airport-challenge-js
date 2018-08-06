class Airport {
  constructor() {
    this.capacity = 12;
    this.planes = [];
    this.currentWeather = this.weather();
  };
  setDefaultCapacity(value) {
    this.capacity = value;
  };
  showCapacity() {
    return this.capacity;
  }
  weather() {
    var currentWeather = Math.floor((Math.random() + 1) + 1);
    return currentWeather;
  };
  landPlane(plane) {
    if(this.currentWeather > 7) {
      throw new Error("cannot land due to storm")  
    }
    else {
      this.planes.push(plane);
    }
  };
  takeOffPlane(plane) {
    if(this.currentWeather > 7) {
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
