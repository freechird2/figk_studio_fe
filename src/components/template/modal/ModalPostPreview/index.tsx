import { useAuth } from "AuthProvider";
import ActionButton from "components/common/ActionButton";
import Hashtag from "components/common/Hashtag";
import { Modal } from "components/common/Modal";
import { TextFigk } from "components/template/TextFigk/index.styled";
import { useModal } from "hook/useModal";
import { TagModel } from "model/common";
import { CreateTextFigkRequest } from "model/textFigk";
import { 에디터특수기호변경 } from "shared/validation";
import styled from "styled-components";
import { Common } from "theme/commonStyle";
import { mediaQuery } from "theme/mediaQuery";
import { mixin } from "theme/mixin";

const Wrapper = styled.div`
  ${mixin.CardContainer}
  border: 1px solid ${[(p) => p.theme.lineColor.line3]};
  ${mediaQuery("mobile")} {
    border-inline: 0;
    /* width: ${(p) =>
      `calc(100% + calc(${p.theme.layout.mobilePadding} * 2 ))`}; */
    /* padding: ${(p) => `24px ${p.theme.layout.mobilePadding}`}; */
    /* margin: ${(p) => `0 -${p.theme.layout.mobilePadding}`}; */

    width: 100%;
    margin: 0;

    padding-inline: 0;
  }
`;

interface ModalPostPreviewProps {
  data: CreateTextFigkRequest;
  onComplete: () => void;
}

export const ModalPostPreview = ({
  data,
  onComplete,
}: ModalPostPreviewProps) => {
  const { user } = useAuth();
  const { closeModal } = useModal();

  const tagConvension = () => {
    const tagBox = data.tags.split(",");

    let tagObj = [] as TagModel[];

    for (let a = 0; a < tagBox.length; a++) {
      tagObj.push({ name: tagBox[a], id: a } as TagModel);
    }

    return tagObj.length > 1 ? tagObj : [{ name: data.tags, id: 1 }];
  };

  const onClickConfirm = () => {
    if (onComplete) onComplete();

    closeModal();
  };
  return (
    <>
      <Modal.Container>
        <Modal.Header title="글 미리보기" />
        <Modal.Contents>
          <Wrapper>
            <TextFigk.Container>
              <small className="font_work">Vol.000</small>
              <h1>{에디터특수기호변경(data.title)}</h1>
              <h2>{에디터특수기호변경(data.subTitle)}</h2>
              <p>{에디터특수기호변경(data.content)}</p>
              {data.tags.length > 0 && (
                <TextFigk.HashtagBox>
                  <Hashtag tags={tagConvension()} />
                </TextFigk.HashtagBox>
              )}

              <TextFigk.Footer>
                <span>{user?.nickname}</span>
              </TextFigk.Footer>
            </TextFigk.Container>
          </Wrapper>
        </Modal.Contents>
        <Common.MainButtonBox>
          <ActionButton size="bigCta" mode="line" onClick={closeModal}>
            닫기
          </ActionButton>
          <ActionButton size="bigCta" mode="solid" onClick={onClickConfirm}>
            작성완료
          </ActionButton>
        </Common.MainButtonBox>
      </Modal.Container>
    </>
  );
};

export default ModalPostPreview;
