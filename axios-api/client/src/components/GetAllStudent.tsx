import React , { useEffect } from "react";

export default function GetAllStudent() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getALLStudent();
  }, []);

  function getALLStudent() {
    fetch("http://localhost:3002/students")
      .then((res) => res.json())
      .then((data) => {
        console.log("Danh sách sản phẩm:", data);
      })
      .catch((err) => console.error("Lỗi khi lấy sản phẩm:", err));
  }


  return <div>Exercise02</div>;
}
