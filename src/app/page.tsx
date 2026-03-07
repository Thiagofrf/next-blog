import PostsList from "@/components/PostsList/PostsList";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className="min-h-screen text-slate-900 bg-slate-100">
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Header</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-4xl font-bold text-center py-8">
        <h2>Footer</h2>
      </footer>

    </div>
  )
}