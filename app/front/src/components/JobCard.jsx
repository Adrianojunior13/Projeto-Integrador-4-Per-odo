function JobCard({ job }) {
  return (
    <div className="border border-gray-200 p-4 rounded-lg bg-white shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-black-700">{job.titulo}</h3>
      <p className="text-gray-700"><span className="font-bold">Empresa:</span> {job.empresa}</p>
      <p className="text-gray-700"><span className="font-bold">Local:</span> {job.local}</p>
    </div>
  );
}

export default JobCard;
