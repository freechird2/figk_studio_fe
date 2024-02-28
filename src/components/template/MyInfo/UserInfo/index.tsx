import { S } from "../index.styled";
interface IuserInfo {
  currentGroup: string;
  nickname: string;
}
const UserInfo = ({ currentGroup, nickname }: IuserInfo) => {
  return <S.Name currentGroup={currentGroup}>{nickname}</S.Name>;
};

export default UserInfo;
