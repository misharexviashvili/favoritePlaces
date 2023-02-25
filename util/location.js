const GOOGLE_API_KEY = "AIzaSyChD0T_irpIXZJ4xrkZuZZ-5oDd1CD4NrY";

export default function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch adress");
  }
  const data = await response.json();
  // data.results[0].formatted_adress google api specific
  const address = data.results[0].formatted_address 
  return address
}
