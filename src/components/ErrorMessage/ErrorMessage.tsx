type ErrorMessageProps = {
    pageTitle: string,
    contentTitle: string,
    content: React.ReactNode
}

export function ErrorMessage({
    pageTitle,
    contentTitle,
    content
}: ErrorMessageProps) {
    return (
        <>
            <title>{pageTitle}</title>
            <div className="flex justify-center items-center min-h-80 bg-slate-900 text-slate-100 p-8 mb-16 rounded-xl">
                <div className="text-center">
                    <h1 className="text-7xl/tight mb-2 font-extrabold">{contentTitle}</h1>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}