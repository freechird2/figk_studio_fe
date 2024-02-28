import { S } from "components/common/FilterSearch/index.styled";
import { FilterToggleButton } from "components/template/Filter/index.styled";
import useWidth from "hook/useWidth";
import { ComponentPropsWithRef, useState } from "react";
interface FilterSearchProps extends ComponentPropsWithRef<"input"> {}
const FilterSearch = ({ ...rest }: FilterSearchProps) => {
  const { media } = useWidth();
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const mobileFilterHandler = () => {
    if (media.maxTablet) {
      setFilterOpen(!filterOpen);
    }
  };
  return (
    <div className="SearchBox">
      <S.Container className="filterSearch">
        <S.SearchText
          type="text"
          placeholder="검색어를 입력해주세요."
          spellCheck={false}
          {...rest}
        />
        <S.SearchButton type="button" />
      </S.Container>
      <FilterToggleButton
        className={filterOpen ? "filterShow" : ""}
        type="button"
        onClick={mobileFilterHandler}
      />
    </div>
  );
};

export default FilterSearch;
