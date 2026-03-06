import { SpinLoader } from "@/components/SpinLoader/SpinLoader"

export default async function HomePage() {
  return (
    <div>
      <SpinLoader containerClasses="min-h-40"/>
    </div>
  )
}