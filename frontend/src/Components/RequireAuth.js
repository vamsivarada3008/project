import React from 'react'
import { useAuth } from './Auth'
function RequireAuth({children}) {
    const auth=useAuth();
    if(auth.email!=="vamsivarada3008@gmail.com" || auth.password!=="vamsi123"){
        window.location.href='/login';
        
    }
  return (
    children
  )
}

export default RequireAuth