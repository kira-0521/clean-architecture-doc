import NotesList from "./components/notes-list"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello
        {/* @ts-ignore */}
        <NotesList />
      </div>
    </main>
  )
}
