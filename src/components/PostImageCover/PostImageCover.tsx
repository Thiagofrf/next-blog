import Image from "next/image";
import Link from "next/link";

type PostImageCoverProps = {
    href: string;
    src: string;
    alt: string;
    preload?: boolean
}

export function PostImageCover({
    href,
    src,
    alt,
    preload = false
}: PostImageCoverProps) {
    return (
        <Link className="w-full h-full overflow-hidden rounded-xl" href={href}>
            <Image 
                className="w-full h-full group-hover:scale-105 transition" 
                src={src} 
                width={1200} 
                height={720} 
                alt={alt}
                preload={preload}
            />
        </Link>
    )
}