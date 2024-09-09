// type Playlist = {
//   id?: string;
//   name: string;
// };

// function validatePlaylist(playlist: Playlist) {
//   if (!playlist.id) throw Error("No id found");
// }

// const myPLaylist: Playlist = { name: "Yo yo" };

// validatePlaylist(myPLaylist);

// const id: string = myPLaylist.id;

// Type 'string | undefined' is not assignable to type 'string'.
//   Type 'undefined' is not assignable to type 'string'.ts(2322)

// // @ts-ignore
// const id2: string = myPLaylist.id;

// @ts-ignore
// const id3: number = myPLaylist.id;

// // Type assertion
// const id4: string = myPLaylist.id as string;

// // Non Null assertion
// const id5: string = myPLaylist.id!;

// console.log(id5);

// type Playlist = {
//   id?: number;
//   name: string;
// };

// function validatePlaylist(playlist: Playlist) {
//   if (!playlist.id) throw Error("No id found");
// }

// const myPLaylist: Playlist = { name: "Yo yo" };

// validatePlaylist(myPLaylist);

// const id6: string = myPLaylist.id as string;

// const id6: string = myPLaylist.id!;
