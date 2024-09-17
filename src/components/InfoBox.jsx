import React from 'react'

function InfoBox() {
    const showdata = JSON.parse(localStorage.getItem("personData"));
    // ดึง id ของผู้ใช้ที่ล็อกอินจาก Local Storage
    const iduser = localStorage.getItem("Id_userlogin");
    // ใช้ id ที่ดึงมาเพื่อค้นหาผู้ใช้
    const person_info = showdata.find(personData => personData.id === parseInt(iduser, 10));

    return (

        <div className='flex flex-col items-center w-[500px] p-12 rounded-xl backdrop-blur-md bg-white/20 '>
            <h1 className='mb-8 text-xl text-amber-200 font-bold'>Personal Information</h1>
            <img className="h-50 w-40 mb-12" src="./image/image_person.jpeg" alt="" />
            <div className='flex flex-col w-5/6 items-start text-white'>
                <p className='my-2'>Name: {person_info?.name}</p>
                <p className='my-2'>Lastname: {person_info?.lastname}</p>
                <p className='my-2'>Nickname: {person_info?.nickname}</p>
                <p className='my-2'>Email: {person_info?.email}</p>
                <p className='my-2'>Phone: {person_info?.phone}</p>
            </div>

        </div>
    )
}

export default InfoBox