import React from 'react'
import IntroHeading from '../component/IntroHeading'

const HomePage = () => {
  return (
    <div className='flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased'>
      <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <IntroHeading/>
      </div>
    </div>
  )
}

export default HomePage