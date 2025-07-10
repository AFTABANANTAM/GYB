
'use client';
import { useState } from 'react';

const branches = {
  arch:'Architecture',
  cse: 'Computer Science & Engineering',
  ece: 'Electronics & Communication Engineering',
  me: 'Mechanical Engineering',
  ee: 'Electrical Engineering',
  mnc: 'Mathematics & Computing',
  ce: 'Civil Engineering',
  chemtech: 'Chemical Technology',
  matsci: 'Materials Science & Engineering',
  mechatronics: 'Mechatronics Engineering',
};

const semesterOptions = [
  { key: 'sem1', label: '1st Sem' },
  { key: 'sem2', label: '2nd Sem' },
  { key: 'sem3', label: '3rd Sem' },
  { key: 'sem4', label: '4th Sem' },
  { key: 'sem5', label: '5th Sem' },
  { key: 'sem6', label: '6th Sem' },
];

const paperStructure = {
  sem1: [
    { batch: '21-25', type: 'midsem', file: 'midsem.pdf' },
    { batch: '21-25', type: 'endsem', file: 'endsem.pdf' },
    { batch: '24-28', type: 'midsem', file: 'midsem.pdf' },
    { batch: '24-28', type: 'endsem', file: 'endsem.pdf' },
  ],
  sem2: [
    { batch: '22-26', type: 'midsem', file: 'midsem.pdf' },
    { batch: '22-26', type: 'endsem', file: 'endsem.pdf' },
    { batch: '23-27', type: 'midsem', file: 'midsem.pdf' },
    { batch: '23-27', type: 'endsem', file: 'endsem.pdf' },
    { batch: '24-28', type: 'midsem', file: 'midsem.pdf' },
    { batch: '24-28', type: 'endsem', file: 'endsem.pdf' },
  ],
  sem4: [
    { batch: '22-26', type: 'midsem', file: 'midsem.pdf' },
    { batch: '22-26', type: 'endsem', file: 'endsem.pdf' },
    { batch: '23-27', type: 'midsem', file: 'midsem.pdf' },
    { batch: '23-27', type: 'endsem', file: 'endsem.pdf' },
    { batch: '24-28', type: 'midsem', file: 'midsem.pdf' },
    { batch: '24-28', type: 'endsem', file: 'endsem.pdf' },

  ],

  sem6: [
    { batch: '22-26', type: 'midsem', file: 'midsem.pdf' },
    { batch: '22-26', type: 'endsem', file: 'endsem.pdf' },
    { batch: '23-27', type: 'midsem', file: 'midsem.pdf' },
    { batch: '23-27', type: 'endsem', file: 'endsem.pdf' },
    { batch: '24-28', type: 'midsem', file: 'midsem.pdf' },
    { batch: '24-28', type: 'endsem', file: 'endsem.pdf' },

  ],
  // Add more semesters as needed
};

export default function ResourcesPage() {
  const [branch, setBranch] = useState('');
  const [semester, setSemester] = useState('');

  const papers = semester ? paperStructure[semester] || [] : [];

  return (
    <div className="min-h-screen bg-yellow-50 bg-[radial-gradient(#facc15_2px,transparent_3px)] [background-size:24px_24px]">
      <div className="backdrop-brightness-95 min-h-screen flex items-center justify-center px-4 py-10">
        <div className="max-w-3xl w-full bg-white/90 border-2 border-black shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-extrabold text-center text-yellow-500 mb-6">
            GYB PYQ VAULT
          </h1>

          {/* Branch Dropdown */}
          <div className="mb-4">
            <label className="block font-semibold mb-1 text-black">Select Branch</label>
            <select
              value={branch}
              onChange={(e) => {
                setBranch(e.target.value);
                setSemester('');
              }}
              className="w-full p-2 border rounded border-black"
            >
              <option value="">-- Choose Branch --</option>
              {Object.entries(branches).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Semester Dropdown */}
          {branch && (
            <div className="mb-6">
              <label className="block font-semibold mb-1 text-black">Select Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full p-2 border rounded border-black"
              >
                <option value="">-- Choose Semester --</option>
                {semesterOptions.map((sem) => (
                  <option key={sem.key} value={sem.key}>
                    {sem.label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Papers List */}
          {papers.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3 text-black">Available Papers</h2>
              <ul className="space-y-4">
                {papers.map((paper, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-3 border border-black rounded hover:bg-yellow-100 transition"
                  >
                    <div>
                      <p className="font-medium text-black">
                        Batch {paper.batch} – {paper.type.toUpperCase()}
                      </p>
                    </div>
                    <a
                      href={`/papers/${branch}/${semester}/${paper.batch}/${paper.file}`}
                      className="text-blue-600 font-semibold hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No Papers Found */}
          {semester && papers.length === 0 && (
            <p className="text-red-500 mt-4">No papers found for this selection.</p>
          )}
        </div>
      </div>
    </div>
  );
}