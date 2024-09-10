// Discriminated union
type DigitalAlbum = {
  type: "digital";
  title: string;
  format: "mp3" | "flac";
  fileSizeMB: number;
};

type VinylAlbum = {
  type: "vinyl";
  title: string;
  diameterInInches: number;
  weightInGrams: number;
};

// This method must work on any type of album
function getAlbumDetails(album: DigitalAlbum | VinylAlbum) {
  console.log(album.format);
  console.log(album.diameterInInches);
  // try using discriminant = type
}
