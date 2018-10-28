# かろりーまっぷ

[![CircleCI](https://circleci.com/gh/calmery/elm-template.svg?style=svg)](https://circleci.com/gh/calmery/elm-template)

[![Product Name](https://img.youtube.com/vi/FbIP_orlYIs/0.jpg)](https://youtu.be/FbIP_orlYIs)

## 製品概要
### Calorie X Tech

### 背景（製品開発のきっかけ、課題等）

近年，カロリーや食生活を気にする人が多く，摂取したカロリーを記憶したり，運動量を記録するようなアプリやサービスがいくつかある．そこでお店と料理のカロリーを紐付けてユーザ間で共有し，現在の自身の状況，摂取したカロリーや消費したカロリーによってお店を提案を行うことができれば便利だと考え，開発を行った．自身の体型，体調に良くも悪くも関心のある人がターゲットである．

### 製品説明（具体的な製品の説明）

このアプリではユーザが自身の 1 日のカロリー摂取，消費量を管理することができる．また，現在位置や摂取，消費カロリーから現在のユーザの状態にあったお店を提案することができる．

この日のカロリーの摂取，消費量，現在の位置情報からユーザにあった周辺のお店をホットペッパーグルメサーチ API を用いて検索し，一覧表示する．ユーザはお店に行き，写真を撮影する．写真から料理名を Google Cloud Vision API を使用して推定し，料理名から大まかなカロリーを算出する．摂取したカロリーは日付と関連付けされ保存され 1 日の摂取，消費量として管理することができる．

### 特長

#### 1. 特長1

この日に摂取したカロリーの合計値を見ることができる

#### 2. 特長2

摂取したカロリーの合計値からオススメのお店を提案できる

#### 3. 特長3

他のユーザのデータと連携し，お店のカロリーを共有することができる

### 解決出来ること

一日の摂取，消費カロリーを管理することができ，過剰なカロリー摂取の抑制に繋げることができる

### 今後の展望

今回，料理のカロリーに関しては FatSecret の API を使用するつもりだったが開発期間の関係上，事前に料理のカロリーを収集してデータベースに登録した．今後は料理名から適切なカロリー値を推定できるようにしたいと考えている．また，ユーザが行ったお店のカロリーに関して，カロリーを推定する際に位置情報と合わせて収集しているため，この地域はカロリーの高い料理を提供するお店が多いといった情報を可視化することも可能である．LIFULL の API などを使用して特殊なニーズに対応した物件の提案も可能だと考えている．

## 開発内容・開発技術
### 活用した技術
#### API・データ

- [Google Cloud Vision API](https://cloud.google.com/vision/)
- [ホットペッパー グルメサーチ API](https://webservice.recruit.co.jp/hotpepper/reference.html)

#### フレームワーク・ライブラリ・モジュール

- [FK_1801/package.json at master · jphacks/FK_1801](https://github.com/jphacks/FK_1801/blob/master/frontend/package.json#L14-L47)
- [FK_1801/requirements.txt at master · jphacks/FK_1801](https://github.com/jphacks/FK_1801/blob/master/backend/requirements.txt)

#### デバイス

- なし

### 研究内容・事前開発プロダクト（任意）

- なし

### 独自開発技術（Hack Dayで開発したもの）
#### 2日間に開発した独自の機能・技術

- [Update · jphacks/FK_1801@62d8479](https://github.com/jphacks/FK_1801/commit/62d847926c4e59bb91565932074913622197491d)
  - チーム内で使用している OS の関係上 Docker を使用して開発環境を構築し，CircleCI も用いて自動でデプロイするようにした
- [カメラから画像を取得する · jphacks/FK_1801@61c0440](https://github.com/jphacks/FK_1801/commit/61c0440cc4ef565f54fb629da4fb044d33a85d97)
  - ブラウザ上でカメラを操作できるようにした
