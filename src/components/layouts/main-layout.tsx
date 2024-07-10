import Link from 'next/link'
import React, { ReactNode } from 'react'
import Auth from '../auth'

const MainLayout = ({children}: React.PropsWithChildren) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center w-full max-w-screen-xl">
        <header className="flex bg-slate-200 w-full p-10 items-center justify-between">
          <div  className='flex items-center space-x-2'>
              <Link href={"/"} className=''>
                Home
              </Link>
              <Link href={'/admin'}>
                Admin DashBoard
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Auth /> 
            </div>
        </header>
        {children}
    </div>
  )
}

export default MainLayout