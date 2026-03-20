import { Container } from "@/components/Container/Container";
import { FeaturedPost } from "@/components/FeaturedPost/FeaturedPost";
import { Header } from "@/components/Header/Header";
import PostsList from "@/components/PostsList/PostsList";
import { SpinLoader } from "@/components/SpinLoader/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader containerClasses="min-h-20 mb-16"/>}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader containerClasses="min-h-20 mb-16"/>}>
        <PostsList />
      </Suspense>
    </>
  )
}