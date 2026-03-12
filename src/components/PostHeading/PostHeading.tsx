import clsx from "clsx";
import Link from "next/link"

type PostHeadingProps = {
    children: React.ReactNode;
    postUrl: string;
    as?: "h1" | "h2"
}

export function PostHeading({
    children,
    postUrl,
    as: TagHeading = 'h2'
}: PostHeadingProps) {
    const headingClassesMap = {
        'h1': 'text-2xl/tight',
        'h2': 'text-1xl/tight'
    }

    const commonClasses = 'font-extrabold sm:text-4xl'

    return (
        <TagHeading className={clsx(headingClassesMap[TagHeading], commonClasses)}>
            <Link href={postUrl}>
                {children}
            </Link>
        </TagHeading>
    )
}