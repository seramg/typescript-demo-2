"use strict";
const albumAwards = {};
albumAwards.Grammy = true;
// const albumAwards1: Record<"Grammy" | "MercuryPrize" | "Billboard", boolean> = {
//     Grammy: true,
//     MercuryPrize: false,
//     Billboard: true,
//   };
//   const albumAwards2: {
//     [index: "Grammy" | "MercuryPrize" | "Billboard"]: boolean;
//   An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead.
//   } = {
//     Grammy: true,
//     MercuryPrize: false,
//     Billboard: true,
//   };
// console.log(albumAwards2)
// type BaseAwards = "Grammy" | "MercuryPrize" | "Billboard";
// type ExtendedAlbumAwards = Record<BaseAwards, boolean> & {
//   [award: string]: boolean;
// };
// const extendedNominations: ExtendedAlbumAwards = {
//   Grammy: true,
//   MercuryPrize: false,
//   Billboard: true, // Additional awards can be dynamically added
//   "American Music Awards": true,
// };
// console.log(extendedNominations)
// interface BaseAwards {
//     Grammy: boolean;
//     MercuryPrize: boolean;
//     Billboard: boolean;
//   }
//   interface ExtendedAlbumAwards extends BaseAwards {
//     [award: string]: boolean;
//   }
