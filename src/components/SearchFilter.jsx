const SearchFilter = ({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Search */}
     <input type="text" placeholder="Search by title..." value={search} onChange={(e) => setSearch(e.target.value)} className="border rounded p-2"/>

        {/* Status Filter */}
     <select value={statusFilter}  onChange={(e) => setStatusFilter(e.target.value)}  className="border rounded p-2" >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>

        {/* Priority Filter */}
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="border rounded p-2"
        >
          <option value="All">All Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
        </select>

      </div>
    </div>
  );
};

export default SearchFilter;