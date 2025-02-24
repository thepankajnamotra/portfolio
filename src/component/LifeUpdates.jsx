import React, { useState } from 'react'
import LifeUpdateList from './LifeUpdateList'
import SeeAllAnchor from './SeeAllAnchor';

const LifeUpdates = ({lifeUpdate}) => {
  const [showMore, setShowMore] = useState(false);
  const [renderElement, setRenderElement] = useState(lifeUpdate);

  const toggleShowMore = ()=>{
    setShowMore((last)=> !last);
    setRenderElement(lifeUpdate);
  }

  useState(()=>{
    if(!showMore){
      setRenderElement((last) => last.slice(0,5));
    }
    else{
      setRenderElement(lifeUpdate);
    }
  }, [showMore])

  if(!renderElement || renderElement.length===0) return;
  return (
    <>
    <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
    Life Changelog and Updates
    </h3>
    {
      renderElement.map((current, i)=>{
        return <LifeUpdateList key={i} current={current}/>
      })
    }
    {!showMore && 
      <SeeAllAnchor toggleShowMore={toggleShowMore} link={'/'} text={'See More'}/>
    }
    </>
  )
}

export default LifeUpdates