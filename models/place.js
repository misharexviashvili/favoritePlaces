class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {latitute: 777, longitude:999}
    this.id = new Date().toString() + Math.random().toString();
  }
}
