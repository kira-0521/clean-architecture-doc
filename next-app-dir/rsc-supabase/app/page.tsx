import { Suspense } from "react"
import NotesList from "./components/notes-list"
import TimerCounter from "./components/timer-counter"
import { Spinner } from "./components/spinner"
import RefreshBtn from "./components/refresh-btn"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hello
        <Suspense fallback={<Spinner color="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList />
        </Suspense>
        <TimerCounter />
        <RefreshBtn />
      </div>
    </main>
  )
}
