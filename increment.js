function increment(num) {
    return num + 1;
}
console.log(increment(999));
//↓
//実行した結果 => 9991
//function increment(num) {
//return num + 1;
//}
//console.log(increment(999));
//↓
//このコードを実行した結果は1000になる
//型によって実行した結果が異なるという例
//このように型によって求めた値を得る事ができないという事を避けるためにTSがある
