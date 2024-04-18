const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        type="text"
        placeholder="Pesquise uma tarefa"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
