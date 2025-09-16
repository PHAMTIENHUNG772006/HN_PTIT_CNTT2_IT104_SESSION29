import { useState, useEffect } from "react";
import Header from "./Header";
import BodyTable from "./BodyTable";
import axios from "axios";

export interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function Layout() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:3002/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Lỗi khi lấy dữ liệu sinh viên:", err);
    }
  };

  const deleteStudent = async (id: number): Promise<void> => {
    try {
      const response = await axios.delete(`http://localhost:3002/students/${id}`);
      console.log(`Đã xoá sinh viên với ID ${id}:`, response.data);
      fetchStudents(); // cập nhật lại danh sách sau khi xoá
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert(`Không tìm thấy sinh viên với ID = ${id}`);
    }
  };

  return (
    <div>
      <Header />
      <BodyTable
        students={students}
        setStudents={setStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}