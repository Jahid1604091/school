async function getStudents() {
  const res = await fetch(`${process.env.BASE_URL}/api/student/all
`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const TeacherAndStaffList = async () => {
  const data = await getStudents();

  return (
    <div className="teacher-staff-list container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Students
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto bg-white border-separate border-spacing-0 border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherAndStaffList;
