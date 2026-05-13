const form = document.getElementById('employeeForm');
const employeeList = document.getElementById('employeeList');
const searchInput = document.getElementById('searchInput');
let employees = [];
function renderEmployeeList(data) {
    employeeList.innerHTML = ''; // Xóa danh sách cũ
    data.forEach(function(emp) {
        employeeList.innerHTML += `
            <li class="employee-item">
                ${emp.name} - ${emp.salary} VNĐ
            </li>
        `;
    });
    const total = employees.reduce(function(sum, emp) {
        return sum + Number(emp.salary); // Tính tổng lương
    }, 0);
    totalSalary.textContent = total;
}
form.addEventListener('submit', function(event)
{
    event.preventDefault(); // Ngăn chặn gửi form mặc định
    const name = document.getElementById('empName').value;
    const salary = document.getElementById('empSalary').value;
    employees.push({ name, salary }); // Thêm nhân viên vào mảng
    renderEmployeeList(employees); // Cập nhật danh sách nhân viên trên giao diện
    form.reset(); // Reset form sau khi thêm nhân viên
});
searchInput.addEventListener('input', function() 
{   const keyword = searchInput.value.toLowerCase();
    const filteredEmployees = employees.filter(function(emp) {
        return emp.name
            .toLowerCase()
            .includes(keyword); // Lọc nhân viên theo tên
    });
    renderEmployeeList(filteredEmployees); // Hiển thị danh sách nhân viên đã lọc
});
