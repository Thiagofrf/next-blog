import { Suspense } from "react";

type AdminPostIdPageProps = {
    params: Promise<{
        id: string
    }>
}

async function PostDetails({ 
    params
}: AdminPostIdPageProps) {
    const { id } = await params;
    return <div className="py-16 text-6xl">AdminPostIdPage {id}</div>
}

export default async function AdminPostIdPage({
    params
}: AdminPostIdPageProps) {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <PostDetails params={params} />
        </Suspense>
    )
}