import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import GoogleIcon from '../../icons/GoogleIcon'
import { useDispatch } from 'react-redux';
import { managebar } from '../../redux/actions/actionManageBar';

const ChangePassword = () => {
	const dispatcher = useDispatch();
	dispatcher(managebar(false));


	const navigate = useNavigate();

    const [user,setUser] = useState({email:"", password:""});
	const [inputError,setInputError] = useState({dispaly:'hidden',msg:''});

    
    const handleUserInput = (e)=>{
        const {name,value} = e.target
        setUser({ ...user, [name]:value });
    }

	const handleLogin = (e)=>{
		e.preventDefault();
		if(!user.email|| !user.password){
		  setInputError({
			display:'block',
			msg:"Please Fill Up all required fields!"
		  });
		  return;
		}
		setInputError({dispaly: 'hidden'});
		dispatcher(managebar(true));
		navigate('/product');
	  }
    
    return (
        <div class="min-h-screen bg-secondary-100 py-6 flex flex-col justify-center sm:py-12">
	        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
		        <div
			        class="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		        </div>
		        <div class="relative px-4 py-10 md:min-w-[30rem] bg-white shadow-lg sm:rounded-3xl sm:p-20">
			        <form class="max-w-md mx-auto" onSubmit={handleLogin}>
				        <div className='text-center'>
					        <h1 class="text-2xl font-semibold text-green-500">Change Password</h1>
				        </div>
				        <div class="divide-y divide-gray-200">
					        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						        <div class="relative">
							        <input autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-green-300 text-green-600 focus:outline-none focus:borer-rose-600" placeholder="Email address"  value={user.email} onChange={handleUserInput}/>
							        <label for="email" class="absolute left-0 -top-3.5 text-green-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-green-600 peer-focus:text-sm">Old Password</label>
						        </div>
						        <div class="relative">
							        <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-green-300 text-green-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={user.pass} onChange={handleUserInput}/>
							        <label for="password" class="absolute left-0 -top-3.5 text-green-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-green-600 peer-focus:text-sm">New Password</label>
						        </div>
						        <div class="relative">
							        <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-green-300 text-green-900 focus:outline-none focus:borer-rose-600" placeholder="Password" value={user.pass} onChange={handleUserInput}/>
							        <label for="password" class="absolute left-0 -top-3.5 text-green-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-green-600 peer-focus:text-sm">Comfirm New Password</label>
						        </div>
								<div className={inputError.dispaly + " text-xs animate-pulse text-red-600 relative flex justify-center items-center"}>
									<div>{inputError.msg}</div>
								</div>
						        <div class=" relative flex justify-center items-center py-3">
							        <button class="btn btn-scale bg-green-600 text-white rounded-md px-3 py-1 mx-3" type='submit'>Update</button>
						        </div>
                                <div class="text-xs text-green-600 relative flex justify-start items-start">
							        <div class="">Forget your password? <Link to='/password-recovery' className='underline text-secondary-600 hover:text-secondary-800'>Forgot Password</Link></div>
						        </div>
					        </div>
				        </div>
			        </form>
		        </div>
	        </div>
        </div>
  )
}

export default ChangePassword
