import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTypesAction,
  orderAlfabeticAction,
  orderAttackAction,
} from "../../../../redux/pokemons/action";

const SelectFilters = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  const handleAttackAndAzOrder = async (e) => {
    if (e.target.value === "attackASC" || e.target.value === "attackDSC") {
      dispatch(orderAttackAction(e.target.value));
    } else {
      dispatch(orderAlfabeticAction(e.target.value));
    }
  };

  return (
    <div>
      {/* A-Z - ATTACK */}
      <select onChange={handleAttackAndAzOrder}>
        <option selected disabled>
          A-Z | -attack+
        </option>
        <option value={"aZ"}>A-Z</option>
        <option value={"zA"}>Z-A</option>
        <option value={"attackASC"}>Attack-asc</option>
        <option value={"attackDSC"}>Attack-des</option>
      </select>

      {/* API OR DB */}
      <select>
        <option value="api">API</option>
        <option value="db">Data Base</option>
      </select>
      {/* TYPE */}
      <select>
        {types.length
          ? types.map((el) => (
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
