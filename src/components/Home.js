import React, {useEffect} from 'react'
import { Navbar } from './Navbar'
import { Products } from './Products'
import '../css/Home.css'
import {auth} from '../Config/Config'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'

export const Home = ({user}) => {
  const history = useHistory();

  // useEffect(() => {
  //     // forcing user to signup
  //     auth.onAuthStateChanged(user => {
  //         if (!user) {
  //             history.push('/login');
  //         }
  //     })
  // })

  return (
    <div className='home'>
        <Navbar user={user}/>
        <Products />
    </div>
  )
}
