import Animal from "../../models/request/addAnimalRequest"

export const getSpeciesList = async () => {
  return await fetch(`${import.meta.env.VITE_BACKEND_URL}/species/all`, {
    method: "get",
    headers: {
      "Content-Type": "application//json",
    },
  })
}

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
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/species/all`, {
    method: "post",
    headers: {
      "Content-Type": "application//json",
    },
    body: JSON.stringify(newAnimal),
  })
}
