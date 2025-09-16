import { useState, useEffect } from "react";
import axios from 'axios';

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone:string;
  status: boolean;
  created_at: string;
}

function CreateStudent() {
  const [students] = useState<Student[]>([
       {
      id: 1,
      student_name: "Nguyen Van A",
      email: "a@example.com",
      address: "Hanoi",
      phone: "0123456789",
      status: true,
      created_at: "2025-09-16T08:00:00Z"
    },
    {
      id: 2,
      student_name: "Tran Thi B",
      email: "b@example.com",
      address: "Da Nang",
      phone: "0987654321",
      status: false,
      created_at: "2025-09-15T09:30:00Z"
    } 
  ]);

  useEffect(() => {
    axios
      .post<Student[]>("http://localhost:3002/students",students)
      .then(() => {
       console.log("thêm data thành công");
       
      })
      .catch((err) => {
        console.error("Lỗi khi lấy students:", err);
      });
  }, []);

  
  

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <ul>
       
      </ul>
    </div>
  );
}

export default CreateStudent;
