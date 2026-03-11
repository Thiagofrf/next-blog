import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import PostsList from "@/components/PostsList/PostsList";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="text-4xl font-bold text-center py-8">
        <h2>Footer</h2>
      </footer>
    </Container>
  )
}