import { Arccordion } from "components/common/Arccordion/index.styled";
import Flex from "components/common/Flex";
import Hashtag from "components/common/Hashtag";
import useWidth from "hook/useWidth";
import { TextFigkModel } from "model/common";
import { useState } from "react";
import { 에디터특수기호변경 } from "shared/validation";
import styled from "styled-components";
import { mixin } from "theme/mixin";
import { TextFigk } from "../TextFigk/index.styled";

const Wrapper = styled.div`
  ${mixin.CommonTextItemBox}
`;

interface Props {
  data: TextFigkModel;
}

const SendingListComponent = ({ data }: Props) => {
  const { media } = useWidth();
  const { id, title, subTitle, authorName, content, tag, link } = data;

  return (
    <Arccordion.Container key={id}>
      <Arccordion.Contents>
        <Arccordion.Head head_title={에디터특수기호변경(title)} />
        <Arccordion.Body>
          <TextFigk.Container style={{ padding: 0, border: 0 }}>
            <h2
              className="pointer underline"
              style={{ marginBottom: "12px" }}
              onClick={() => window.open(link)}
            >
              {에디터특수기호변경(subTitle)}
            </h2>
            <p>{에디터특수기호변경(content)}</p>
            <TextFigk.HashtagBox>
              <Hashtag tags={tag} />
            </TextFigk.HashtagBox>
            <TextFigk.Footer>
              <span>{에디터특수기호변경(authorName)}</span>
            </TextFigk.Footer>
          </TextFigk.Container>
        </Arccordion.Body>
      </Arccordion.Contents>
    </Arccordion.Container>
  );
};

export default SendingListComponent;
