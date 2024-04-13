import React from 'react'
import { ClipLoader} from 'react-spinners'

const override = {
    display:'block',
    margin : '100px auto'
}


const Spinner = ({  loading }) => {
  return (
    <>
      <ClipLoader
          color='#4338ca'
          loading={loading}
          cssOverride={override}
          size={150}
          // aria-label="Loading Spinner"
          // data-testid="loader"
        />
        <h1 className='text-center'>Loading ...</h1>
    </>
  )
}

export default Spinner