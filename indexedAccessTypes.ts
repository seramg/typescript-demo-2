// Indexed Access Types
// Similar to how you would access the value of a property in an
// object at runtime, but instead operates at the type level.

interface Album1 {
  title: string;
  artist: string;
  releaseYear: number;
}

// I need the type of title key in Album interface
type AlbumTitle1 = Album1.title;
type AlbumTitle2 = Album1["title"];

// Chaining Multiple Indexed Access Types
// Indexed access types can be chained together to access nested properties.
// This is useful when working with complex types that have nested structures.

interface Album2 {
  title: string;
  artist: {
    name: string;
  };
}
type ArtistName = Album1["artist"]["name"];

// Passing a Union to an Indexed Access Type
// To access multiple properties from a type
type Album3 = {
  title: string;
  isSingle: boolean;
  releaseYear: number;
};

type AlbumPropertyTypes1 =
  | Album3["title"]
  | Album3["isSingle"]
  | Album3["releaseYear"];
type AlbumPropertyTypes2 = Album3["title" | "isSingle" | "releaseYear"];
type AlbumPropertyTypes3 = Album3[keyof Album3];
