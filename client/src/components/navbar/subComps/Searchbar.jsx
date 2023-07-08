import useSearchbar from "../../../utils/customHooks/useSearchbar";

const Searchbar = () => {
  const { handleSearch, handleSubmit, value } = useSearchbar();
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleSearch}
        value={value}
        placeholder="Search pokemons!"
      />
    </form>
  );
};

export default Searchbar;
