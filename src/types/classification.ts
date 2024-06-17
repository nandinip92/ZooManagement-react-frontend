export const CLASSIFICATIONS = [
  "All",
  "Mammal",
  "Reptile",
  "Bird",
  "Insect",
  "Amphibian",
  "Fish",
  "Invertebrate",
] as const
// ⚠️ It can be very useful to make a custom type based on the contents of an array

// 👉 Hover 'Classification' in the below line and see that it's defined as
// 		the union of whatever is in the 'CLASSIFICATIONS' array

export type Classification = (typeof CLASSIFICATIONS)[number]
// 💡 This is because of the `as const` declaration above - that says that the *contents*
//     of the CLASSIFICATIONS array are not allowed to change, so TypeScript can safely create a type
//     based on the contents of CLASSIFICATIONS


export type ClassificationsType= typeof CLASSIFICATIONS
