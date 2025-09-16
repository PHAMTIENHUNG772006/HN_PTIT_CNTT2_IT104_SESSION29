import { useEffect, useState } from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
}


export default function GetStudentId() {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    getStudentID(1);
  }, []);

  function getStudentID(id :number ) {
    fetch(`http://localhost:3001/students/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => console.error("Lỗi khi lấy sản phẩm:", err));
  }
  if (!student) {
    return <div>Không tìm thấy student</div>
  }

  return (
    <div>
      <div>{student.id}</div>
      <div>{student.student_name}</div>
      <div>{student.email}</div>
      <div>{student.address}</div>
    </div>
  );
}
