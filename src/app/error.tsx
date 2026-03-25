'use client'; 

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

type RootErrorPageProps = {
    error: Error,
    reset: () => void
}

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
    return (
        <>
            <ErrorMessage 
                pageTitle="Internal Server Error" 
                contentTitle="501" 
                content='An error was found. Try again later.'/>
        </>
    )
}