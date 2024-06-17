import Animal from "../models/request/addAnimalRequest"

export const getSpeciesList = async () => {
  return await fetch(`${import.meta.env.VITE_BACKEND_URL}/species`, {
    method: "get",
    headers: {
      "Content-Type": "application//json",
    },
  })
}

//http://localhost:5039
// fetch("http://localhost:5039/animals", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: animalName,
//       speciesId,
//       sex,
//       dateOfBirth: dob,
//       dateOfAcquisition,
//     }),
//   })
export const addNewAnimal = async (newAnimal: Animal) => {
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/animals`, {
    method: "post",
    headers: {
      "Content-Type": "application//json",
    },
    body: JSON.stringify(newAnimal),
  })
}
