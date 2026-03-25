import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

export default function NotFoundPage() {
    return (
        <>
            <ErrorMessage 
                pageTitle="Page not found" 
                contentTitle="404" 
                content="Error 404 - The page you're trying to enter does not exist."/>
        </>
    )
}