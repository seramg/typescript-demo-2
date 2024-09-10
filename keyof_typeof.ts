// keyof operator
// The keyof operator allows you to extract the keys from an object type into a union type.

interface Album {
  title: string;
  artist: string;
  releaseYear: number;
  // genre: string;
}

type AlbumKeys = "title" | "artist" | "releaseYear";
type AlbumKeysUsingKeyof = keyof Album;

// The AlbumKeys type can then be used to help ensure a key being used
// to access a value in an Album is valid as seen in this function:

// keyof operator works on type not on value.
function getAlbumDetails(
  album: Album,
  key: "title" | "artist" | "releaseYear"
) {
  // function getAlbumDetails(album: Album, key: keyof album) {
  // function getAlbumDetails(album: Album, key: AlbumKeysUsingKeyof) {
  return album[key];
}

const album = {
  title: "random title",
  artist: "random artist",
  releaseYear: 2015,
  // genre: string;
};
getAlbumDetails(album, "producer");
getAlbumDetails(album, "title");

//============================================================================================

// typeof operator
// The typeof operator allows you to extract a type from a value.
// typeof operator is used on value not on type.

const albumSales = {
  "Kind of Blue": 5000000,
  "A Love Supreme": 1000000,
  "Mingus Ah Um": 3000000,
};

// We can use typeof to extract the type of albumSales, which will turn it
// into a type with the original keys as strings and their inferred types as values:

type AlbumSalesType = {
  "Kind of Blue": number;
  "A Love Supreme": number;
  "Mingus Ah Um": number;
};

type AlbumSalesTypeUsingTypeof = typeof albumSales;

// How to get union of keys of albumSales object?
type AlbumSalesKeys1 = keyof albumSales;

// A common pattern is to combine keyof and typeof:
type AlbumSalesKeys2 = keyof typeof albumSales; // "Kind of Blue" | "A Love Supreme" | "Mingus Ah Um"
type AlbumTitles = keyof AlbumSalesTypeUsingTypeof; // "Kind of Blue" | "A Love Supreme" | "Mingus Ah Um"

function getSales(title: AlbumTitles) {
  return albumSales[title];
}
getSales("Kind of Blue");
getSales("Dingiri Dingiri Pattalam");

// typeof is not the same as the typeof operator used at runtime.
// TypeScript can tell the difference based on whether it's used in a type context or a value context:

// Runtime typeof
const albumSalesType = typeof albumSales; // "object"

// Type typeof
type AlbumSalesType3 = typeof albumSales;
