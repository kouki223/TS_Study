//画像を取得する関数

//猫画像を取得するためにCat APIを叩き、猫画像を取得する
//Cat APIにおいては一度に10件以内、月間10000リクエスト以内であればAPIキー認証無しで使用可能になっている
//叩くAPIは/v1/images/searchへHTTPリクエストを送る

type Image = {
  url: string;
  id: string;
};

export async function fetchImage():Promise<Image> {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log("fetchImage: 猫画像を取得しました", images);
    return images[0];
}
