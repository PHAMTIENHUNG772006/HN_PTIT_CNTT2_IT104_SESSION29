import React from 'react'

export default function Header() {
  return (
    <div style={{
        margin: "0",
        width:"auto",
        height: "50px",
        display:"flex",
        justifyContent:"space-between",
        backgroundColor: "#435D7D",
        padding:"40px",
        alignItems:"center",
        color:"#ffff"

    }}>
        <h1>Quản lí sinh viên</h1>
        <button style={{
            width:"150px",
            height:"40px",
            borderRadius:"7px",
            backgroundColor : "#28A745",
             color:"#ffff"
        }}>+ Thêm mới sinh viên</button>
    </div>
  )
}
