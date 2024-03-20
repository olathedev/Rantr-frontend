'use client'
import Link from "next/link"

const page = () => {
    const step = 1
    
  return (
    <main className='container mx-auto h-screen flex flex-col gap-5 justify-center items-center'>

        <header className="w-full md:w-[40%]">
            <p className="text-sm text-gray-500">Hey, welcome</p>
            <h1 className="text-2xl font-bold">Let Sign You Up</h1>
        </header>
        <form className='w-full flex flex-col gap-2 md:w-[40%]'>
            <label>Email</label>
            <input type="text" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' placeholder="johndoe@gmail.com" />

            <button className="bg-primary py-3 w-full rounded text-secondary-foreground ">Submit</button>
            <Link href="/auth/signin">  <p>Already have an account? <span className='text-primary font-semibold'>Sign in</span> instead</p></Link>

        </form>
    </main>
  )
}

export default page