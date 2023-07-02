import React from 'react'
import './sorting.css'

const sorting  = ({algo}) => {
    return (
        <div className='sorting'>
            <div className='key'> 
                <span className='sq compare'></span> Compare
            </div>
            <div className='key'> 
                <span className='sq swap'></span> {algo !== 'mergeSort' ? 'Swap' : 'Taking From Auxillary Space'}
            </div>
            <div className='key'> 
                <span className='sq sorted'></span> Sorted
            </div>
        </div>
    )
}

export default sorting 
