import Link from 'next/link'
import React from 'react'

const BackButton = () => {
    return (
        <div>
            <Link href="/" className="font-semibold rounded inline-flex gap-1 text-sm items-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                    </svg>

                </span>
                Back
            </Link>
        </div>
    )
}

export default BackButton