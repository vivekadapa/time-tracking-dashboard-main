import React from 'react'

const Header = ({click,clickfunc}) => {
    console.log(click);
    console.log(clickfunc);

    return (
        <header>
            <div className='flex-container'>
                <div>
                    <img src="/images/image-jeremy.png" alt="" />
                </div>
                <div className='report-of'>
                    <p>Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>
            <div className='btn-container'>
                <button onClick={clickfunc} className={click==='Daily'?'active':'none'} >Daily</button>
                <button onClick={clickfunc} className={click==='Weekly'?'active':'none'}  >Weekly</button>
                <button onClick={clickfunc} className={click==='Monthly'?'active':'none'} >Monthly</button>
            </div>
        </header>
    )
}

export default Header