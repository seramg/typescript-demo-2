type StreamingPlaylist =
  | {
      status: "available";
      content: {
        id: number;
        name: string;
        tracks: string[];
      };
    }
  | {
      status: "unavailable";
      reason: string;
    };

type StreamingAlbum =
  | {
      status: "available";
      content: {
        id: number;
        title: string;
        artist: string;
        tracks: string[];
      };
    }
  | {
      status: "unavailable";
      reason: string;
    };

// I will make a generic type that will accept the content type as parameter and return the above types.
// Similar to functions in JavaScript.
const add = (a: number, b: number) => a + b;
add(1, 2);

// Syntax: type genericType<Parameter> = return new type
type ResourceStatus<TContent> = unknown;
type StreamingPlaylistUsingGeneric = ResourceStatus;

// All type arguments are mandatory

// Multiple Type Parameters
// metaData: {
//     creator: string;
//     artwork: string;
//     dateUpdated: Date;
// }
// metaData: {
//     creator: string;
//     artwork: string;
// }

// Default type parameters

// With default type parameters we can skip parameters.

// Type parameter constraints: TContent must have id, TMetadata must be object
