'use client'

export function Header() {
    console.log('HEADER CLIENT')
    return (
        <h1
            className="text-6xl font-bold text-blue-500"
            onClick={() => alert(123)}
        >
            Texto no meu h1
        </h1>
    )
}