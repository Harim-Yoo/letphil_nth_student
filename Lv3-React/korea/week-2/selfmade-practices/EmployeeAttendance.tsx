import { useState } from "react";
// ==========================================
// 9. Employee Attendance (상태 문자열 변경)
// ==========================================
/**
 * Components: AttendanceRoster (Parent), EmployeeRow (Child)
 * Requirements:
 * - Parent stores: Array of employees { id, name, status } (status can be "Present", "Absent", "Late")
 * - Child receives: employee object, onChangeStatus function
 * - Child action: Child has 3 buttons. Clicking one updates that employee's status string in the parent.
 */

type AttendanceType = "Present" | "Absent" | "Late"
type Employee = {
  id: number;
  name: string;
  status: AttendanceType ;
}

const EmployeeRow = (props: {
  employee: Employee;
  onChangeStatus: (status: AttendanceType) => void;
}) => {
  const {employee, onChangeStatus} = props;

  return (
    <>
    <div className="flex flex-row justify-center items-center gap-5 py-5">
    <span>{employee.name}'s status is "{employee.status}"".</span>
    <button onClick={()=>onChangeStatus("Present")}>Save as Present</button>
    <button onClick={()=>onChangeStatus("Absent")}>Save as Absent</button>
    <button onClick={()=>onChangeStatus("Late")}>Save as Late</button>
    </div>
    </>
  );
};

export const AttendanceRoster = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "John",
      status: "Present"
    },
    {
      id: 2,
      name: "Mary",
      status: "Present"
    }
  ])

  const changeStatus = (targetId: number, status:AttendanceType) => {
    setEmployees(employees.map((emp)=>(emp.id === targetId ? {...emp, status:status} : emp)))
  }
  

  return(
    <>
    {employees.map((emp:Employee)=>(
      <EmployeeRow
        key = {emp.id}
        employee = {emp}
        onChangeStatus = {(status:AttendanceType)=>changeStatus(emp.id, status)}
      />
    ))}
    </>
  );
};