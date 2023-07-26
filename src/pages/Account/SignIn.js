import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Signin = () => {

  const [formvalue, setFormvalue]= useState({name:'',password:'' });
  const [isLogin, setIslogin] = useState(false);
  const navigate = useNavigate();
  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormvalue({...formvalue, [name]:value});
    //console.log(formvalue);
  }
  const handleFormsubmit= async (e)=>{
    e.preventDefault();
    
   await fetch('http://komiljonovdev.uz/Bobur/legendApi/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:formvalue.name,
        password: formvalue.password,
        login: "legend-admin"
      })
    })
    .then(response=>response.json())
    .then(response=>{
  Cookies.set(response)
      if(response.ok === true){
        navigate(window.location.href = "https://youtube.com") 
      }else{
        setIslogin(true);
      }
    })
   

  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      showPassword: !prevFormData.showPassword,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h2 className="text-2xl font-semibold mb-6">Tizimga Kirish</h2>
        <form onSubmit={handleFormsubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Login</label>
            <input
              type="name"
              id="name"
              name='name'
              style={{border:"2px solid blue", outline:"none", fontWeight:"bolder",fontSize:"20px"}}
              value={formvalue.name} onChange={ handleInput} 
              className="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 px-3 py-2"
              autoComplete='off'
              required
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type={formData.showPassword ? 'text' : 'password'}
              id="password"
              name='password'
              style={{border:"2px solid blue", outline:"none", fontWeight:"bolder",fontSize:"20px"}}
              value={formvalue.password} onChange={ handleInput}
              className="w-full rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 px-3 py-2"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer"
            >
              {formData.showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 15.536a9.94 9.94 0 002.857 2.857M9.536 5.121a9.94 9.94 0 002.857 2.857M7.05 7.05a14.04 14.04 0 013.465 3.465M12 2v4m0 16v4m8-10a13.963 13.963 0 01-3.465 3.465M7.05 16.95a14.04 14.04 0 01-3.465-3.465M16.95 7.05a14.04 14.04 0 013.465-3.465M2 12h4m16 0h4" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 15.536a9.94 9.94 0 002.857 2.857M9.536 5.121a9.94 9.94 0 002.857 2.857M7.05 7.05a14.04 14.04 0 013.465 3.465M12 2v4m0 16v4m8-10a13.963 13.963 0 01-3.465 3.465M7.05 16.95a14.04 14.04 0 01-3.465-3.465M16.95 7.05a14.04 14.04 0 013.465-3.465M2 12h4m16 0h4" />
                </svg>
              )}
            </button>
            {isLogin? <p className='text-[red]'>Siz parolni yoki ismni xato kiritdingiz !</p>: null}

          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Jo'natish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;