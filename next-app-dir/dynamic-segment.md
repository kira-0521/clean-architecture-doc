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

1. ダイナミックセグメントのディレクトリに`not-found.tsx`を作成
2. `next/navigation`から`notFound`を使用
3. 1で定義した`not-found.tsx`にコンポーネントが表示される

