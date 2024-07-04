import React, { useEffect, useState } from "react"
import { getSpeciesList } from "@api/backendClient"
import { SpeciesList, Species } from "@views/species"
import { Classification } from "@type/classification"
import ClassificationDropDown from "@components/classification_drop_down/ClassificationDropDown"
import GetSpeciesImagePaths from "./GetSpeciesImagePaths"

const SpeciesPage: React.FC = () => {
  const [speciesList, setSpeciesList] = useState<Species[] | undefined>(
    undefined
  )
  const [filterValue, setFilterValue] = useState<Classification>("All")
  const [speciesImageLookup, setSpeciesImageLookup] =
    useState<Record<string, string>>()
  const [isFetching, setIsFetching] = useState(true)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const apiResponse = await getSpeciesList()
        if (isFetching) {
          const json = (await apiResponse.json()) as SpeciesList
          setSpeciesList(json.speciesList)
        }
        setIsFetching(false)
      } catch (error) {
        setIsFetching(false)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    getData()
    setSpeciesImageLookup(GetSpeciesImagePaths())
  }, [])

  const getSpeciesImage = (speciesName: string) => {
    if (speciesImageLookup?.hasOwnProperty(speciesName)) {
      return speciesImageLookup[speciesName]
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <ClassificationDropDown />
      {speciesList && (
        <div className="grid gap-3 lg:grid-cols-6 lg:gap-6 md:grid-cols-4 sm:grid-cols-2">
          {speciesList.map((species, key) => (
            <div
              key={key}
              className="species-card dark:bg-slate-800 w-full rounded-lg shadow-md"
            >
              {/* <img
                className="object-cover w-full h-48"
                src={`./src/assets/Images/${species.speciesName}.jpg`}
                alt={species.speciesName}
              /> */}
              <img
                className="object-cover w-full h-48"
                src={getSpeciesImage(species.speciesName)}
                alt={species.speciesName}
              />
              <div className="px-6 py-4">
                <div className="font-semibold text-xl mb-2">
                  {species.speciesName}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SpeciesPage

// {speciesList&& <div className="grid gap-4 lg:grid-cols-6">
//           {speciesList.map((species,key)=>(
//             <div className="species-card w-full rounded-lg shadow-md" key={key}>
//               <img className="object-cover w-full h-48" src={`./src/assets/Images/${species.speciesName}.jpg`} alt={species.speciesName}/>
//               <div className="p-4">
//                 <h4 className="text-xl font-semibold">{species.speciesName}</h4>
//               </div>
//             </div>
//           ))}
//         </div>

//         }

// useEffect(()=>{
//     getSpeciesList() .then((response) => {
//     if (response.ok) {
//       response.json().then((data) => {setSpeciesList(data.speciesList);
//         console.log(data.speciesList)
//       })
//     } else if (response.status === 404) {
//       console.log("No Data found")
//     } else {
//       setError(true)
//     }
//   })
//   .catch(() => setError(true))
//   .finally(() => setLoading(false))
// },[])
