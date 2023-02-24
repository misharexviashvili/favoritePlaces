const GOOGLE_API_KEY = "AIzaSyChD0T_irpIXZJ4xrkZuZZ-5oDd1CD4NrY";

export default function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyDrSA4leqC1tI5McmufluKWBVJXhFM7rZM`;
  return imagePreviewUrl;
}
