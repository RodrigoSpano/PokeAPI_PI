import { useSelector } from "react-redux";
import useSelectFilters from "../../../../utils/customHooks/useSelectFilters";

const SelectFilters = () => {
  const types = useSelector((state) => state.types);
  const pokemons = useSelector((state) => state.backup);

  let typesSeparated = pokemons
    ?.map((pokemon) => pokemon.types.map((el) => el.name))
    .flat();

  let filteredTypes = types.filter((type) =>
    typesSeparated.some((el) => el === type.name)
  );

  const {
    handleAttackAndAzOrder,
    handleResetFilters,
    handleFilterByType,
    status,
    handleFromApiOrDb,
  } = useSelectFilters();

  return (
    <div>
      <button onClick={handleResetFilters}>reset</button>
      {/* A-Z - ATTACK */}
      <select value={status.order} onChange={handleAttackAndAzOrder}>
        <option value={"default"} disabled>
          A-Z | -attack+
        </option>
        <option value={"aZ"}>A-Z</option>
        <option value={"zA"}>Z-A</option>
        <option value={"attackASC"}>Attack-asc</option>
        <option value={"attackDSC"}>Attack-des</option>
      </select>

      {/* API OR DB */}
      <select value={status.api_db} onChange={handleFromApiOrDb}>
        <option value="default" disabled>
          API | DB
        </option>
        <option value="api">API</option>
        <option value="db">Data Base</option>
      </select>
      {/* TYPE */}
      <select value={status.types} onChange={handleFilterByType}>
        <option value="default" disabled selected>
          types
        </option>
        {filteredTypes.length
          ? filteredTypes.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))
          : null}
      </select>
    </div>
  );
};

export default SelectFilters;
