import React from 'react'

const Card = ({card,index,colors,icons,clickOn}) => {
  return (
    <div className="card" key={index}>
    <div className='bg-div' style={
      {
        borderRadius: '0.75rem 0.75rem 0 0',
        backgroundColor:`${colors[index]}`,
        backgroundImage: `url(/images/${icons[index]}.svg)`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
      }
    } >

    </div>
    <div className='info-div'>
      <div className='info-div-1'>
        <p>{card.title}</p>
        <img src="/images/icon-ellipsis.svg" alt="" />
      </div>
      <div className='info-div-2'>

        {
          clickOn === 'Daily'?  (
            <>
            <p>{card.timeframes.daily.current}hrs</p>
            <p>Yesterday - {card.timeframes.daily.previous}hrs</p>
            </>
          ) : clickOn === 'Weekly' ? (
            <>
            <p>{card.timeframes.weekly.current}hrs</p>
            <p>Last Week - {card.timeframes.weekly.previous}hrs</p>
            </>
          ):(
            <>
            <p>{card.timeframes.monthly.current}hrs</p>
            <p>Last Month - {card.timeframes.monthly.previous}hrs</p>
            </>
          )
        }
        
      </div>
    </div>
  </div>
  )
}

export default Card