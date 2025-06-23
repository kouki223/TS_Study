import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {
  const image = await fetchImage();
  return (
    <>
      <h1>The cat ID is {image.id}</h1>
      <CatImage url={image.url} />
    </>
  )
};
