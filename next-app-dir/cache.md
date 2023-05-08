# キャッシュ

cacheの指定方法によってレンダリング方法が異なる

## デフォルト

- revalidate = false
- SSG

```tsx
const res = await fetch(`${process.env.url}/hoge`, {
    headers: new Headers({
      apiKey: process.env.apikey as string,
    }),
    cache: 'force-cache',
  })
```

## SSR（λ）

- revalidate = false
- SSR

```tsx
const res = await fetch(`${process.env.url}/hoge`, {
    headers: new Headers({
      apiKey: process.env.apikey as string,
    }),
    cache: 'no-store',
  })
```

## ISR

- revalidate = true
- ISR

10秒後に再リクエストを行いデータを取得する。それまでは静的に生成したHTMLを返す。

```tsx
const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
    headers: new Headers({
      apiKey: process.env.apikey as string,
    }),
    next: { revalidate: 10 },
  })
```
