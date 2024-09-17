import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import RegisterBox from "./RegisterBox";

function LoginBox() {
  const [isLog, setIslog] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const storeData = JSON.parse(localStorage.getItem("personData"));
  console.log(storeData);
  const navigate = useNavigate();

  function ClickReg() {
    setIslog(!isLog);
  }

  function handleLogin(e) {
    e.preventDefault();
    //เช็คสว่าใช่ user หรือไม่
    const user = storeData && storeData.find(personData => personData.username === loginInfo.username && personData.demopw === loginInfo.password);
    if (user) {
      localStorage.setItem("Id_userlogin", user.id);
      navigate("/home");
    } else {
      alert("Username or Password is incorrect !");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // console.log(loginInfo)

  return (
    <div>
      {isLog ? (
        <form className='flex flex-col m-9 items-center h-[400px] w-[270px] p-3 rounded-lg backdrop-blur-md bg-white/20'>

          <h1 className="mt-5 text-center text-[25px] text-gray-600">
            Welcome
          </h1>

          <div className="flex flex-col justify-center items-center w-full m-12  ">
            <div>
              <p className="text-[10px] text-gray-600 font-medium">Username</p>
              <input name="username"
                className="inline-block my-2 p-1 h-6 w-44 text-[10px] text-white bg-transparent border-b-2 "
                type="username"
                value={loginInfo.username}
                onChange={handleChange} />
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] text-gray-600 font-medium">Password</p>
              <input name="password"
                className="inline-block my-2 p-1 h-6 w-44 text-[10px] text-white bg-transparent border-b-2"
                type="password"
                value={loginInfo.password}
                onChange={handleChange} />
              <Link to="/" className="text-[9px] self-end transition duration-120 hover:text-yellow-100" href="">Forget&nbsp;password</Link>
            </div>
          </div>

          <button onClick={handleLogin} className="inline-block text-center px-5 mt-3 rounded-lg bg-sky-300 text-white hover:bg-stone-600 hover:text-white
          transition duration-200 ease-in hover:ease-out hover:scale-110">
            GO
          </button>

          <div className="flex text-[12px] mt-2 font-light">
            <p>Do not have account? &nbsp;</p>
            <button onClick={ClickReg} className="transition duration-120 hover:text-yellow-100" href="">Register</button>
          </div>
        </form>

      ) : <RegisterBox />}
    </div>
  );
}

export default LoginBox;
