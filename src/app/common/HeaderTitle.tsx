import { IHeaderTitle } from "../types/interfaces";

const HeaderTitle = ({ category }: IHeaderTitle) => {
  return <p>{category}</p>;
};

export default HeaderTitle;
