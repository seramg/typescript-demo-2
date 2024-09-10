// Mapped types

// Mapped types in TypeScript allow you to create a new object type based on
// an existing type by iterating over its keys and values.

// Syntax: {
//   [keyVariable in union] : type;
// }

// Using Mapped Types with Union Types
type Example = "a" | "b" | "c";
// Requirement = {
// a:'a'
// b:'b'
// c:'c'
// }
// type Example = "a" | "b" | "c" | true;
type MappedExample = {
  [E in Example]: E;
};

interface Album {
  name: string;
  artist: string;
  songs: string[];
}

// Requirement = 
// {
//   name?: string | null;
//   artist?: string | null;
//   songs?: string[] | null;
// };

type AlbumWithNullable =
