import Footer from '@/app/(components)/Footer/Footer'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='dark:bg-darkbg'>
      {children}
      
      <Footer fixed="fixed"/>
    </div>
  )
}

export default layout
