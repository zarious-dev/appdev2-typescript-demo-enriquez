# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
Explores literal types as an alternative to enums, showing how to restrict variables and function parameters to a fixed set of allowed string values.

## 07-custom-type-role.ts
Introduces the `type` keyword to create reusable custom types, showing how to define a literal union type, build a complex object type that references it, and use both in variables and functions with real data.

## 08-functions.ts
Covers function return type annotations, the special `void` and `never` types, and how to use functions as types for callbacks and object methods - to understand how TypeScript enforces and describes what a function accepts, returns, and how it behaves.

## 09-special-types.ts
Explores the `null` and `undefined` special types, experimenting with different union type combinations like `null | string` and `undefined | number`, and logging all results to confirm they are distinct types that can be paired with any other type.

## 10-form.html and 10-type-narrowing.ts
Explores how to safely handle nullable DOM elements using type casting, optional chaining, and null guards - to understand how TypeScript forces explicit null handling when working with the DOM.

## 11-optional.ts
Covers optional function parameters, optional object properties, and the nullish coalescing `??` operator - to understand how TypeScript handles missing values and why `??` behaves differently from `||` when dealing with falsy values like empty strings.