import React from 'react'
import LifeUpdateList from './LifeUpdateList'

const LifeUpdates = ({lifeUpdate}) => {
  if(!lifeUpdate || lifeUpdate.length===0) return;
  return (
    <>
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
    Life Changelog and Updates
    </h3>
    {
      lifeUpdate.map((current, i)=>{
        return <LifeUpdateList key={i} current={current}/>
      })
    }
    </>
  )
}

export default LifeUpdates