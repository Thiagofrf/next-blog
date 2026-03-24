import clsx from "clsx";
import Link from "next/link"

type PostHeadingProps = {
    children: React.ReactNode;
    postUrl?: string;
    as?: "h1" | "h2"
}

export function PostHeading({
    children,
    postUrl = '',
    as: TagHeading = 'h2'
}: PostHeadingProps) {
    const headingClassesMap = {
        'h1': 'text-2xl/tight sm:text-4xl font-extrabold',
        'h2': 'text-1xl/tight font-bold'
    }

    const commonClasses = ''

    return (
        <TagHeading className={clsx(headingClassesMap[TagHeading], commonClasses)}>
            {postUrl !== '' && (
                <Link href={postUrl} className="hover:text-slate-600 transition">
                    {children}
                </Link>
            )}

            {postUrl === '' && (
                <p>
                    {children}
                </p>
            )}
        </TagHeading>
    )
}