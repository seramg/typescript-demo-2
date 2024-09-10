//====================================================================//
// void vs never

// void
// A method that completes execution but returns nothing
const fnAcceptingString = (input) => {
  console.log(input);
};

// never
// A method that never completes execution
const fnThatNeverCompletes = () => {
  throw new Error();
};

//====================================================================//
// any - wide but not type safe
const fnAcceptingAny = (input: any) => {
  console.log(`Input: ${input}`);
};

// Any type is assignable to any
fnAcceptingAny("hello");
fnAcceptingAny(42);
fnAcceptingAny(true);
fnAcceptingAny({});

// any is assignable to other types
let anyTypeVariable: any = 12345;
fnAcceptingString(anyTypeVariable);

//====================================================================//
// unknown - wide and type safe
const fnAcceptingUnknown = (input: unknown) => {
  console.log(`Input: ${input}`);
};

// Any type is assignable to unknown
fnAcceptingUnknown("hello");
fnAcceptingUnknown(42);
fnAcceptingUnknown(true);
fnAcceptingUnknown({});

// unknown is not assignable to other types because unknown is wide
let unknownTypeVariable: unknown = "Hello, India!";
fnAcceptingString(unknownTypeVariable);

//====================================================================//
// never - narrow type
const fnAcceptingNever = (input: never) => {
  console.log(`Input: ${input}`);
};

// no types are assignable to never
fnAcceptingNever("hello");
fnAcceptingNever(42);
fnAcceptingNever(true);
fnAcceptingNever({});

// never is assignable to other types
let neverTypeVariable: never = "Hello, Kerala!";
fnAcceptingString(neverTypeVariable);
fnAcceptingString(fnThatNeverCompletes());
let stringVariable: string = fnThatNeverCompletes();
let numberVariable: number = fnThatNeverCompletes();
//====================================================================//
