// const albumAwards = {};

// albumAwards.Grammy = true;
// Property 'Grammy' does not exist on type '{}'.

// const albumAwards: {
//   [index: string]: boolean;
// } = {};

// albumAwards.Grammy = true;
// albumAwards.MercuryPrize = false;
// albumAwards.Billboard = true;

// console.log(albumAwards);

// interface AlbumAwards {
//     [index: string]: boolean;
//   }

//   const beyonceAwards: AlbumAwards = {
//     Grammy: true,
//     Billboard: true,
//   };

// type Param = Object;

// function f(obj: Param) {
//   return obj;
// }

// f({ name: "Sera" });
// f(new Date()); // No error is here since Date is also an object

// type Param = Record<string, unknown>;

// function f(obj: Param) {
//   return obj;
// }

// f({ name: "Sera" });
// f(new Date());

// // Argument of type 'Date' is not assignable to parameter of type 'Param'.
// //   Index signature for type 'string' is missing in type 'Date'.ts(2345)

// type Param = {
//   [index: string]: unknown;
// };

// function f(obj: Param) {
//   return obj;
// }

// f({ name: "Sera" });
// f(new Date());

// Argument of type 'Date' is not assignable to parameter of type 'Param'.
//   Index signature for type 'string' is missing in type 'Date'.ts(2345)
