import { AuthorHomeResponse } from "model/home";
import { S } from "./index.styled";
import UserInfo from "./UserInfo";
interface Props {
  data?: AuthorHomeResponse;
}
const MyInfo = ({ data }: Props) => {
  return (
    <S.Container>
      <UserInfo
        currentGroup={data?.groupName ?? ""}
        nickname={data?.nickname ?? ""}
      />
      <S.Desc>{data?.introduction}</S.Desc>
    </S.Container>
  );
};

export default MyInfo;
