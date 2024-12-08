import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import Controls from "./components/Controls";

function App() {
  const [count, setCount] = useState(0);
  const [students] = useState([
    { id: "SV001", name: "Nguyễn Văn A", gpa: 3.5 },
    { id: "SV002", name: "Trần Thị B", gpa: 2.8 },
    { id: "SV003", name: "Lê Văn C", gpa: 3.9 },
    { id: "SV004", name: "Hoàng Thị D", gpa: 3.0 },
  ]);

  const [searchValue, setSearchValue] = useState(""); // Quản lý input tìm kiếm
  const [sortOption, setSortOption] = useState("default"); // Quản lý chiều sắp xếp

  // Hàm xử lý tìm kiếm
  const handleSearchChange = (value) => setSearchValue(value);

  // Hàm xử lý sắp xếp
  const handleSortChange = (option) => setSortOption(option);

  // Bước 4: Thực hiện lọc và sắp xếp dữ liệu
  const filteredAndSortedData = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "gpa-asc":
          return a.gpa - b.gpa;
        case "gpa-desc":
          return b.gpa - a.gpa;
        default:
          return 0;
      }
    });
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Quản lý sinh viên</h1>

        
        <Controls
          searchValue={searchValue}
          sortOption={sortOption}
          onSearchChange={handleSearchChange}
          onSortChange={handleSortChange}
        />

        
        <Table data={filteredAndSortedData} />
      </div>
    </>
  );
}

export default App;
