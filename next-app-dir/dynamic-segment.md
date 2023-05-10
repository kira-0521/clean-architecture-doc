# ダイナミックセグメント

動的なセグメント

## ダイナミックセグメントの作成

ディレクトリをネストさせディレクトリ名を`[]`で囲むとダイナミックセグメントになる

```bash
blog
├── [blogId]
│   └── page.tsx
├── layout.tsx
└── page.tsx
```

### Not Found

1. ダイナミックセグメントのディレクトリにnot-found.tsxを作成
2. next/navigationからnotFoundを使用
3. 1で定義したnot-found.tsxにコンポーネントが表示される

