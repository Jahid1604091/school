async function getRoutine() {
  const res = await fetch(`${process.env.BASE_URL}/api/all/routine
`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const TeacherAndStaffList = async () => {
  const data = await getRoutine();
  return (
    <div className="teacher-staff-list container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Routine</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-auto bg-white border-separate border-spacing-0 border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Class
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Section
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Subject
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Day
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                Start
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 border-b">
                End
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-50 transition-all">
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.class}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.section}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.subjectId}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.day}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.startTime}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 border-b">
                  {staff.endTime}
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
