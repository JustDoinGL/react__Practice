import React from "react";
import Input from "../UI/Input/Input";
import Select from "./../UI/Select/Select";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <>
      <Input
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />

      <Select
        onChange={selectedSorted => setFilter({ ...filter, sort: selectedSorted })}
        value={filter.sort}
        options={[
          { value: "name", sort: "По названию" },
          { value: "text", sort: "По тексту" },
        ]}
        defaultValue={"Сортировка"}
      />
    </>
  );
};

export default PostFilter
