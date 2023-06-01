import React, { useState } from 'react'
import {db,auth} from '../Config/Config'
import { Link } from 'react-router-dom';

export const Signup = (props) => {

    //defining state using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Signup = (e) => {
        e.preventDefault();
        // console.log('form submitted');
        // console.log(name, email, password);
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email, 
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login')
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }
  return (
    <div className='container'><br/>
    <h2 style={{color: 'GrayText'}}>SIGN UP</h2>
    <br/>
    <form autoComplete='off' className='form-group' onSubmit={Signup}>
        <label htmlFor='Name'>Name</label><br/>
        <input type={Text} className='form-control' required value={name} onChange={(e) => setName(e.target.value)}/><br/>
        <label htmlFor='Email'>Email</label><br/>
        <input type={Text} className='form-control' required value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
        <label htmlFor='Password'>Password</label><br/>
        <input type={'password'} className='form-control' required value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        <button type='submit' className='btn btn-success btn-md mybtn'>REGISTER</button>
    </form>
    {error && <div className='error-msg'>{error}</div>}<br/>
    <span>Already have a account ?
    <Link to='/login'> LOGIN HERE</Link></span>
    </div>
  )
}
