import axios from "axios";
import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function BodyTable() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isOk, setIsOk] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Lỗi khi lấy dữ liệu sinh viên:", err));
  };

  function handleDelete(id: number) {
    setSelectedId(id); 
    setIsOk(true);   
  }

  async function handleOk() {
    if (selectedId !== null) {
      try {
        await axios.delete(`http://localhost:3001/students/${selectedId}`);
        fetchStudents(); 
      } catch (error) {
        console.error("Lỗi khi xoá:", error);
      }
    }
    setIsOk(false);  
    setSelectedId(null);
  }

  function handleCancel() {
    setIsOk(false);
    setSelectedId(null);
  }


  const selectedStudent = students.find((s) => s.id === selectedId);

  return (
    <div style={{ padding: "20px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              <input type="checkbox" />
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên sinh viên</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Địa chỉ</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Số điện thoại</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map((element) => (
            <tr key={element.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input type="checkbox" />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{element.student_name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{element.email}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{element.address}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{element.phone}</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <button
                  style={{
                    marginRight: "8px",
                    padding: "4px 8px",
                    backgroundColor: "#1890ff",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(element.id)}
                  style={{
                    padding: "4px 8px",
                    backgroundColor: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOk && (
        <div id="deleteModal" className="modal" style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div className="modal-content" style={{
            background: "#fff", borderRadius: "8px", width: "400px", padding: "20px"
          }}>
            <div className="modal-header" style={{ marginBottom: "10px" }}>
              <h2>Xoá sinh viên</h2>
              <span className="close" style={{ cursor: "pointer" }} onClick={handleCancel}>&times;</span>
            </div>
            <div className="modal-body" style={{ marginBottom: "20px" }}>
              <p>
                Bạn chắc chắn muốn xoá sinh viên{" "}
                <b>{selectedStudent?.student_name}</b>?
              </p>
            </div>
            <div className="modal-footer" style={{ textAlign: "right" }}>
              <button onClick={handleCancel} style={{ marginRight: "8px" }}>Hủy</button>
              <button onClick={handleOk} style={{ background: "#ff4d4f", color: "#fff" }}>Xoá</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
