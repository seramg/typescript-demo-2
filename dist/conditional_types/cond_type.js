"use strict";
// type Result = true extends boolean ? 1 : 0
// type IsString<T> = T extends string ? "Yes" : "No";
// type Test1 = IsString<string>;  // "Yes"
// type Test2 = IsString<number>;  // "No"
// type GetReturnType<T> = 
// T extends (...args: any[]) => infer R ? R : never;
// // Example function
// function add(a: number, b: number): number {
//   return a + b;
// }
// // Using the conditional type
// type AddReturnType = GetReturnType<typeof add>;  // number
// type FileTypes = 'mp3' | 'mp4' | 'zip' | 'pdf'
// type FilterMediaFromFileTypes<T> = T extends 'mp3' | 'mp4' ? T : never
// type MediaFileTypes = FilterMediaFromFileTypes<FileTypes>
// type MediaFileTypes = 
// FilterMediaFromFileTypes<'mp3'> |
// FilterMediaFromFileTypes<'mp4'> |
// FilterMediaFromFileTypes<'zip'> |
// FilterMediaFromFileTypes<'pdf'> |
// type MediaFileTypes = 
// 'mp3' |
// 'mp4' |
// never |
// never |
// type MediaFileTypes = 'mp3' | 'mp4' |
