import { Arccordion } from "components/common/Arccordion/index.styled";
import { NOTICE_PER } from "shared/common";
import styled from "styled-components";

const NoticeBodyPreText = styled.pre`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${(p) => p.theme.textColor.textColor70};
  white-space: pre-wrap;
`;

const SkeletonNoticeArccordion = () => {
  return (
    <div>
      {new Array(NOTICE_PER).fill("").map((_, index) => {
        return (
          <Arccordion.Container key={index}>
            <Arccordion.Contents>
              <Arccordion.Head className="skeleton">
                <span>
                  SkeletonNoticeArccordionSkeletonNoticeArccordionSkeletonNoticeArccordionSkeletonNoticeArccordion
                </span>
                <div className="non_active_date">99. 99. 99</div>
              </Arccordion.Head>
            </Arccordion.Contents>
          </Arccordion.Container>
        );
      })}
    </div>
  );
};

export default SkeletonNoticeArccordion;
