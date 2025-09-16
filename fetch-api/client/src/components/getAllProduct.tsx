import React , { useEffect } from "react";

export default function getALLProduct() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getALLProducts();
  }, []);

  function getALLProducts() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Danh sách sản phẩm:", data);
      })
      .catch((err) => console.error("Lỗi khi lấy sản phẩm:", err));
  }


  return <div>Exercise02</div>;
}
