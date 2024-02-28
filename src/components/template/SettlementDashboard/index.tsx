import { S } from "./index.styled";

const SettlementDashboard = () => {
  return (
    <S.Container>
      <S.Row>
        <S.Box form="part">
          <dl>
            <dt>총 정산금</dt>
            <dd>1,246,000원</dd>
          </dl>
        </S.Box>
        <S.Box form="part">
          <dl>
            <dt>총 정산 완료금</dt>
            <dd>1,246,000원</dd>
          </dl>
        </S.Box>
        <S.Box form="part">
          <dl>
            <dt>총 정산 대기금</dt>
            <dd>1,246,000원</dd>
          </dl>
        </S.Box>
      </S.Row>
      <S.Row>
        <S.Box form="full">
          <dl>
            <dt>총 송고지원 :</dt>
            <dd>1,246,000원</dd>
          </dl>
          <dl>
            <dt>총 작품발행 :</dt>
            <dd>1,246,000원</dd>
          </dl>
          <dl>
            <dt>총 송고투표 :</dt>
            <dd>1,246,000원</dd>
          </dl>
        </S.Box>
      </S.Row>
    </S.Container>
  );
};

export default SettlementDashboard;
