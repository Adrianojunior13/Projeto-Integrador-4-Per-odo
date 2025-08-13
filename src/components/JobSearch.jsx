function JobSearch() {
  return (
    <div className="p-4 bg-gray-100 rounded">
      <input
        type="text"
        placeholder="Buscar vaga..."
        className="border p-2 w-full rounded focus:outline-none focus:ring focus:border-green-500"
      />
    </div>
  );
}

export default JobSearch;
