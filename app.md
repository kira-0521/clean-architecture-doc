# appディレクトリ

- appディレクトリの下の階層を「Sub Tree」（子フォルダー=>セグメント）
- 各Sub Treeごとにフォルダー名を含めたパスでアクセスできる

## 決められたファイル

- layout.tsx
  - pageに対するレイアウト
  - pageをラップする形で自動的に配置される
  - RootLayoutはNext全体のレイアウト
- error.tsx
  - 自動的にerror-boundary
- loading.tsx
  - 自動的にsuspense
- page.tsx
  - 対象のセグメントのUI
- head.tsx
- template.tsx

## サーバーコンポーネント

- async/awaitをコンポーネントレベルで付与できる