export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // {latitute: 777, longitude:999}
    this.id = new Date().toString() + Math.random().toString();
  }
}
