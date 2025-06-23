//猫画像を表示するReactコンポーネントを記述する
"use client"

import { useState } from "react"
import { fetchImage } from "./fetch-image"

type CatImageProps = {
    url: string;
}

export function CatImage({url}: CatImageProps) {
    const [imageUrl, setImageUrl] = useState(url);

    const freshImage = async() => {
        setImageUrl("");
        const image = await fetchImage();
        setImageUrl(image.url);
    };

    return (
        <div>
            {imageUrl && <img src={imageUrl} />}
            <button onClick={freshImage}>他のニャンコも見る</button>
            <h1></h1>
        </div>
    )
};
