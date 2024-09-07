'use client' // Error boundaries must be Client Components

export default function GlobalError({ error, reset }) {
    return (
        // global-error must include html and body tags
        <html>
            <body className="w-full min-h-screen flex flex-col gap-5  justify-center items-center">
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()} className="bg-primary px-8 py-2 ">Try again</button>
            </body>
        </html>
    )
}