// Links for import.mata.glob
// https://vitejs.dev/guide/features.html#glob-import
// https://stackoverflow.com/questions/74088009/vite-react-import-images-dynamically-from-public-url

const GetSpeciesImagePaths = () => {
  const modules = import.meta.glob(
    "@/assets/Images/*.{png,jpg,jpeg,PNG,JPEG}",
    { eager: true, import: "default" }
  )
  const imagePaths: { [key: string]: string } = {}

  Object.values(modules).forEach((path) => {
    const url = new URL(path as string, import.meta.url)
    const filePath = url.pathname
    const speciesName = filePath.split("/").slice(-1)[0].split(".")[0]
    imagePaths[speciesName] = filePath
  })
  console.log(imagePaths)
  return imagePaths
}

export default GetSpeciesImagePaths
