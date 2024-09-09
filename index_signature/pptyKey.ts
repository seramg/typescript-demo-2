// const str: string = "key";
// const num: number = 0;
// const sym: symbol = Symbol(str);

// const valid = {
//   [str]: "valid",
//   [num]: "valid",
//   [sym]: "valid",
// };

// // But doesn't work for object, its not supported by JS runtime
// const obj = {};

// const invalid = {
//   [obj]: "invalid",
// };
// // Error: A computed property name must be of type 'string', 'number', 'symbol', or 'any'.ts(2464)

// type ValidKey = string | number | symbol;
// let example: ValidKey
// example = {}

// type ValidKey = PropertyKey;
