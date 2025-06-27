import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

//Jestのtesting-libraryを使って期待値と実行結果を検証するテスト方法
//期待値をロジックで表現してテストする=>Mini testと似ている
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  // ここにテストの中身を書いていきます
//   ・テストにおける要件
//     - ボタンの描画
//     - OFFと表示されているか確認
//     - ボタンをクリックする
//     - ONと表示されているか確認
    const user = userEvent.setup();
    render(<SimpleButton />)
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    await user.click(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
});

//スナップショットテストを実行する(スナップショットとの差分がないかチェックするテスト方法)
//toMatchSnapshot()関数を使って実行する

test("描画されてすぐはOFFと表示されている", () => {
    const view  = render(<SimpleButton />)
    expect(view.container).toMatchSnapshot();
});