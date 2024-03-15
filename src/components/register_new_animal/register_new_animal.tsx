import React, { FormEvent, useState } from "react";
import "./styles.css";

export const RegisterNewAnimal: React.FC = () => {
  const [animalName, setAnimalName] = useState<string>("");
  const [speciesId, setSpeciesId] = useState<number>(-19);
  const [sex, setSex] = useState<number>();
  const [dob, setDob] = useState(new Date());
  const [dateOfAcquisition, setDateOfAcquisition] = useState(new Date());

  const resetAllFields = () => {
    setAnimalName("");
    setSpeciesId(-19);
    setSex(undefined);
  };
  const submitAnimal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(JSON.stringify(Object.fromEntries(formData)));

    fetch("http://localhost:5039/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: animalName,
        speciesId,
        sex,
        dateOfBirth: dob,
        dateOfAcquisition,
      }),
    }).then((response) => {
      console.log(response.json());
      if (response.ok) {
        (event.target as HTMLFormElement).reset();
        resetAllFields();
      }
    });
  };

  return (
    <div className="form-container">
      <div className="user-input-form">
        <form onSubmit={submitAnimal}>
          <label htmlFor="name"> Animal Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={animalName}
            onChange={(event) => setAnimalName(event.target.value)}
          />
          <label htmlFor="speciesId">Specied ID:</label>
          <input
            type="text"
            id="speciesId"
            name="speciesId"
            aria-label="speciesId"
            value={speciesId}
            onChange={(event) => setSpeciesId(Number(event.target.value))}
          />
          <div className="radio">
            <input
              id="male"
              type="radio"
              name="sex"
              value={0}
              checked={sex === 0}
              onChange={() => setSex(0)}
            />
            <label htmlFor="male">Male</label>

            <input
              id="female"
              type="radio"
              name="sex"
              value={0}
              checked={sex === 1}
              onChange={() => setSex(1)}
            />
            <label htmlFor="female">Female</label>
          </div>
          <label htmlFor="date-of-birth">Date Of Birth</label>
          <input
            name="dob"
            type="datetime-local"
            id="date-of-birth"
            max-value={dob}
            onChange={(event) => setDob(new Date(event.target.value))}
          />
          <label htmlFor="date-of-aquisition">Date Of Acquisition</label>
          <input
            name="dateOfAcq"
            type="datetime-local"
            id="date-of-aquisition"
            max-value={dateOfAcquisition}
            onChange={(event) =>
              setDateOfAcquisition(new Date(event.target.value))
            }
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
