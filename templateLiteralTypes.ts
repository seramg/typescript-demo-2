// Template Literal Types in TypeScript

// Similar to how template literals in JavaScript allow you to interpolate values into strings.
// Template literal types in TypeScript can be used to interpolate other types into string types.

type PngFile = `${string}.png`;
let myImage: PngFile = "photo.png";
// Try 1.png
// Try .jpg

//===============================================================================================
// Combining Template Literal Types with Union Types

// By passing a union to a template literal type, you can
// generate a type that represents all possible combinations of the union.

type ColorShade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type OrangePalette = `Orange-${ColorShade}`;

type Color = "red" | "blue" | "green";
type ColorPalette = `${Color}-${ColorShade}`;
// Now, ColorPalette will represent all possible combinations of colors and shades:

let myColor: ColorPalette = "red-500";
let myColor2: ColorPalette = "blue-900";
