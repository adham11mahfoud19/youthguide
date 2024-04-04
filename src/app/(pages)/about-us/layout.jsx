import Footer from '@/app/(components)/Footer/Footer'
import React from 'react'

const layout = ({children, about}) => {
  return (
    <div className='dark:bg-darkbg'>
      {children}
      {about}
      <Footer />
    </div>
  )
}

export default layout
