# osoji-toban
お掃除当番カレンダーを作るやつ
![お掃除当番テスト のコピー - Google スプレッドシート - Google Chrome 2021_09_06 2_37_41](https://user-images.githubusercontent.com/40171289/132136236-d44f1a9c-6dc4-431b-bbb8-118865578912.png)
![Google カレンダー - 2021年 9月 6日の週 - Google Chrome 2021_09_06 2_37_46](https://user-images.githubusercontent.com/40171289/132136237-49bf4f85-df22-4ab5-836d-3e4464f552e3.png)


# 機能
- スプシに登録した人を上から順に毎日当番に割り当ててgoogleカレンダーに招待します。
- 特定の曜日をスキップ出来ます
- 特定の曜日にお休みする人を設定しておくと、その人をいったん飛ばしてあとで割り当てます。

# 使い方

1. [スプシ](https://docs.google.com/spreadsheets/d/1jUQ80Czucg-SqM58kyF4lbLXFmOnS7sJpx58Z61MtB0/edit?usp=sharing)を複製して内容を埋める
1. ツール＞マクロ＞doGetを実行
1. 確認画面が出るのでOKするとカレンダーの予定を作成する

# 自分でデプロイしたい場合

1. [スプシ](https://docs.google.com/spreadsheets/d/1jUQ80Czucg-SqM58kyF4lbLXFmOnS7sJpx58Z61MtB0/edit?usp=sharing)を複製して内容を埋める
1. スクリプトエディタを起動し、プロジェクトの設定からスクリプトIDをコピーして.clisp.jsonのscriptIdを上書きする
1. yarnしてclasp loginしたらyarn deployする。上書きするか聞かれるのでyで進める。
1. スプシに戻ってツール＞マクロ＞インポートでdoGetを追加

# 注意
- カレンダーはその時ログインしているアカウントのデフォルトカレンダーに追加され、スプシに書いてあるメアドをゲストに追加します。
- マクロ実行時に権限の許可を求められます。特にgoogle側の承認は受けていないので自己責任で許可してください。
