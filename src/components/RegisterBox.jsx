import React, { useEffect } from 'react'
import { json, Link } from 'react-router-dom'
import { useState } from 'react'
import LoginBox from './LoginBox';

function RegisterBox() {
  const [isReg, setIsReg] = useState(true);
  const [canReg, setCanreg] = useState(false);
  const regbox_On = () => {
    setIsReg(!isReg);
  }

  const [personData, setPersondata] = useState(() => {
    const savePersondata = localStorage.getItem("personData")

    //หากมีข้อมูลในlocalstorange จะแปลงstring to javascript เพื่อเเสดงหน้าเว็บ
    if (savePersondata) {
      return JSON.parse(savePersondata)
    }
    else {
      //หากไม่มีข้อมูลในlocalstorange
      return [];
    }
  });

  const [addNew, setAddnew] = useState({
    name: "",
    lastname: "",
    username: "",
    nickname: "",
    phone: "",
    email: "",
    demopw: "",
    confirmpw: "",
  });

  //แปลงjava object to string ใส่ localstorange 
  useEffect(() => {
    localStorage.setItem('personData', JSON.stringify(personData));
  }, [personData]) //ใส่เพราะเมื่อมีการอัพเดท

  //set ข้อมูลจากinput ไปที่state addNew
  function checkReg() {
    if (
      addNew.name &&
      addNew.lastname &&
      addNew.username &&
      addNew.phone &&
      addNew.email &&
      addNew.demopw === addNew.confirmpw
    ) {
      setCanreg(true);
    } else {
      setCanreg(false);
      alert("Please fill in all fields!");
    }
  }

  function handleInputchange(e) {
    const { id, value } = e.target;
    setAddnew((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkReg();
    if (canReg) {
      setPersondata([...personData, { ...addNew, id: personData.length + 1 }]);
      setIsReg(false);
    }
  }

  return (
    <div>
      {isReg ? (
        <div className="relative m-9">
          <img className="absolute z-10 right-2 top-2 h-7 w-7 hover:scale-110 shadow-xl" onClick={regbox_On} src="./image/button_exit.png" alt="" />
          <form className='flex flex-col items-center self-center md:h-[400px] min-w-80 p-3 rounded-lg backdrop-blur-md bg-white/30 md:w-[600px]'>

            <h1 className="my-2 text-center text-[25px] md:my-7">
              Register
            </h1>

            <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 md:w-full '>
              <div className="flex flex-col">
                <p className="text-[10px]">Name</p>
                <input id='name'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="text"
                  value={addNew.name} //เพิ่มค่าใส่addNew
                  onChange={handleInputchange} //update ค่า
                />
              </div>
              <div>
                <p className="text-[10px]">Lastname</p>
                <input id='lastname'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="text"
                  value={addNew.lastname}
                  onChange={handleInputchange}
                />
              </div>
              <div>
                <p className="text-[10px]">Username</p>
                <input id='username'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="text"
                  value={addNew.username}
                  onChange={handleInputchange}
                />
              </div>
              <div>
                <p className="text-[10px]">Nickname</p>
                <input id='nickname'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="text"
                  value={addNew.nickname}
                  onChange={handleInputchange}
                />
              </div>
              <div>
                <p className="text-[10px]">Phone</p>
                <input id='phone'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="number"
                  value={addNew.phone}
                  onChange={handleInputchange}
                />
              </div>
              <div>
                <p className="text-[10px]">Email</p>
                <input id='email'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="email"
                  value={addNew.email}
                  onChange={handleInputchange}
                />
              </div>
              <div>
                <p className="text-[10px]">Password</p>
                <input id='demopw'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="password"
                  value={addNew.demopw}
                  onChange={handleInputchange}
                />
              </div>
              <div>
                <p className="text-[10px]">Confirm Password</p>
                <input id='confirmpw'
                  className="inline-block my-2 p-1 h-4 w-44 text-[10px] text-stone-600 bg-transparent border-b-2"
                  type="password"
                  value={addNew.confirmpw}
                  onChange={handleInputchange}
                />
              </div>
            </div>
            <div>
            </div>
            <div>
            </div>

            <button onClick={handleSubmit} className="text-center my-3 md:mt-10 w-20 rounded-lg bg-amber-200 text-stone-500 hover:bg-stone-600 hover:text-white
          transition duration-200 ease-in hover:ease-out hover:scale-110">
              Submit
            </button>

          </form>
        </div>
      )

        : <LoginBox />}

    </div>
  )
}


export default RegisterBox