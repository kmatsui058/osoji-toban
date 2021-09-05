# osoji-toban
お掃除当番カレンダーを作るやつ

# 使い方
1. .env.exampleを複製して.envにして、カレンダーのタイトルにつけたい名前に変える
1. clasp loginしてnpm run deployすればスクリプトが追加される
1. このスプシを複製して内容を埋める
https://docs.google.com/spreadsheets/d/1jUQ80Czucg-SqM58kyF4lbLXFmOnS7sJpx58Z61MtB0/edit?usp=sharing
1. スクリプトエディタを起動し、先ほど追加したスクリプトをライブラリに追加する
1. スクリプトに下記を追加
```
function myFunction() {
  OSOJITOBAN.doGet()
}

```
myFunctionを実行すれば予定が作成され、確認画面が出るのでOKするとカレンダーの予定を作成します。

# 注意
- カレンダーはその時ログインしているアカウントのデフォルトカレンダーに追加され、スプシに書いてあるメアドをゲストに追加します。
