import Flex from "components/common/Flex";
import { Modal } from "components/common/Modal";
import styled from "styled-components";
import { mixin } from "theme/mixin";
import { S } from "./index.styled";

const ModalSettlementDesc = () => {
  return (
    <Modal.Container>
      <Modal.Header title="정산내역 상세" />
      <Modal.Contents>
        <S.Wrapper>
          <S.TopBox>
            <Flex direction="column" gap={6}>
              <S.Status color="error" className="status">
                취소
              </S.Status>
              <span className="contents">Vol.023 A조 송고신청 보상금</span>
            </Flex>
            <span className="settlement">20,000원</span>
          </S.TopBox>
          <S.MiddleBox>
            {/* 송고일때 */}
            <dl>
              <dt>송고일</dt>
              <dd>22.12.17 11:00</dd>
            </dl>
            <dl>
              <dt>정산 완료일</dt>
              <dd>22.12.23 15:23</dd>
            </dl>
            {/* 당선일때 */}
            <dl>
              <dt>FIGK 당선일</dt>
              <dd>22.12.17 11:00</dd>
            </dl>

            {/* 투표일때 */}
            <dl>
              <dt>송고일</dt>
              <dd>22.12.17 11:00</dd>
            </dl>
            <dl>
              <dt>정산 취소일</dt>
              <dd className="red">22.12.23 15:23</dd>
            </dl>
          </S.MiddleBox>
          <S.GrayBox>
            <span className="vol font_work">Vol.023</span>
            <span className="text ">
              MS가 오피스 코파일럿을 발표했다. 우리가 일하는 방식은 바뀔 것이다.
              그리고...
            </span>
          </S.GrayBox>
        </S.Wrapper>
      </Modal.Contents>
    </Modal.Container>
  );
};

export default ModalSettlementDesc;
