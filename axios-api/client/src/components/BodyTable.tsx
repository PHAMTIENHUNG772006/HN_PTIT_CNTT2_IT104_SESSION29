import Swal from "sweetalert2";
import type { Student } from "./Layout";

interface BodyProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
  deleteStudent: (id: number) => Promise<void>;
}

export default function BodyTable({ students, setStudents, deleteStudent }: BodyProps) {

  const handleDelete = async (id: number) => {
    const result = await Swal.fire({
      title: "Bạn chắc chắn muốn xoá?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vâng, xoá đi!",
    });

    if (result.isConfirmed) {
      await deleteStudent(id);
      Swal.fire("Đã xoá!", "Sinh viên đã được xoá.", "success");
    }
  };

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
    </div>
  );
}