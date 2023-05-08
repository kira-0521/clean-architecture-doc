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
- サーバーでレンダリングされる
- Secure keyを使用可能（envの値を隠せる（クライアントのバンドルに含めない））
- BrowserAPI、useState、useEffect、onClickなどは使用不可

![server_component](./img/server_component.png)

## ローディング

- 自動的にSuspenseでpage.tsxがラップされる
- Suspenseのfallbackは自由に指定可能

## エラー

- 自動的にErrorBoundaryでpage.tsxがラップされる
- クライアントサイドでエラーを表示したいため`use client`宣言が必要

### rule

| /        | サーバーコンポーネント | クライアントコンポーネント |
| -------- | ---------------------- | -------------------------- |
| import   | ⭕️                      | ❌                          |
| children | TD                     | ⭕️                          |

### streaming SSR

- サーバーコンポーネント単体を`suspense`でラップしてコンポーネントレベルのサーバーサイドレンダリングを実施できる
- クライアントコンポーネントはすぐにクライアントに返され、JavaScriptがHydrateされ、インタラクティブな要素になる

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList /> {/* Server Component */}
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}
```

### router.refresh

- サーバーコンポーネントのみをサーバーサイドで再レンダリングする
- クライアントコンポーネントの状態は保持される

```tsx
import { useRouter } from 'next/navigation';
const router = useRouter()

router.refresh()
```