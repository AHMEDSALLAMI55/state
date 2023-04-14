import React from 'react'

export const ProfilePhoto = (state) => {
  return (
    <div>
<img src='MEE.jpg' alt='Profile Photo'className='Photos'/>
    <button onClick={() => state.ProfilePhoto('ahmed sallami')}>
        Click here
    </button>
</div>
  )
}
export default ProfilePhoto