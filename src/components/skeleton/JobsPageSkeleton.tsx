

const JobsPageSkeleton = () => {
  const jobs = [
    { id: 1, title: "Blacksmith Technician", category: "Manufacturing and Forging Engineering" },
    { id: 2, title: "Psychological Counseling Specialist", category: "Religious and Social Studies" },
    { id: 3, title: "Development Director", category: "Family Counseling and Development" },
    { id: 1, title: "Blacksmith Technician", category: "Manufacturing and Forging Engineering" },
    { id: 2, title: "Psychological Counseling Specialist", category: "Religious and Social Studies" },
    { id: 3, title: "Development Director", category: "Family Counseling and Development" },
    // add more jobs here...
  ];


  return (
    <section className="pt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="relative bg-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
          >
            {/* Image placeholder */}
            <div className="bg-gray-300 h-48 flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>

            {/* Job Info */}
            <div className="absolute top-4 left-4 bg-red-800 text-white text-xs font-semibold px-3 py-1 rounded">
              {job.title.toUpperCase()}
            </div>

            <div className="p-5">
              <p className="text-gray-800 font-medium"></p>
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default JobsPageSkeleton;