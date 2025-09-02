import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {jobs.map((vaga, index) => (
        <JobCard key={index} job={vaga} />
      ))}
    </div>
  );
}

export default JobList;
