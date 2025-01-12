
import SearchForm from './SearchForm';
import FiltersByCategory from './FiltersByCategory';
import FilterByPrice from './FilterByPrice';
import FilterByOrder from './FilterByOrder';

function Filters() {
  return (
    <div className="bg-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 space-x-0 md:space-x-6 mt-14 mx-auto max-w-[1280px]">
      <div className="flex-1 w-full md:w-auto">
        <SearchForm />
      </div>

      <div className="space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row items-center w-full md:w-auto">
        <FiltersByCategory />
        <FilterByOrder />
        <FilterByPrice />
      </div>
    </div>
  );
}

export default Filters;
