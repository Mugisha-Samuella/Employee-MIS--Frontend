import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
    const [employee, setEmployees] = useState([])

    useEffect(()=>{
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/employees");
        setEmployees(result.data);
    }

  return (
    <>
      {/* <div className="p-6">
        <a
          className="bg-blue-600 text-white p-2 rounded-full font-extrabold text-xl shadow-md shadow-blue-200 transition-transform transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          href="#"
        >
           +
        </a>
      </div> */}

      <div className="overflow-x-auto py-8 px-4 md:px-8">
        <div className="bg-white shadow-lg rounded-lg">
          <table className="min-w-full bg-transparent">
            <thead className=" border-b">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">
                  Title
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">
                  Department
                </th>
                <th className="py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-3 px-6 border-b flex employees-center">
                    <img
                      src={employee.photoUrl}
                      alt="Avatar"
                      className="rounded-full w-10 h-10 mr-3"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-800">
                        {employee.firstName} {employee.lastName}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {employee.email}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-6 border-b text-gray-700">
                    {employee.employeeTitle}
                  </td>
                  <td className="py-3 px-6 border-b">
                    {employee.status === "Active" ? (
                      <span className="bg-green-100 text-green-700 font-semibold border border-green-200 rounded-full px-3 py-1 text-xs">
                        {employee.status}
                      </span>
                    ) : (
                      <span className="bg-red-100 text-red-700 font-semibold border border-red-200 rounded-full px-3 py-1 text-xs">
                        {employee.status}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-6 border-b text-gray-700">
                    {employee.employeeDepartment}
                  </td>
                  <td className="py-3 px-6 border-b">
                    <button className="text-blue-600 hover:underline transition duration-150">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
