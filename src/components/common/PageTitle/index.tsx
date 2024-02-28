import useWidth from "hook/useWidth";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { S } from "./index.styled";

const Title = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  color: ${(p) => p.theme.textColor.textColor90};
  margin-bottom: 1.4rem;
  white-space: nowrap;
`;
const Subject = styled.h2`
  color: ${(p) => p.theme.textColor.textColor70};
  font-size: 1.4rem;
  line-height: 1.5;
  white-space: nowrap;
  strong {
    font-size: inherit;
    font-weight: 600;
    color: inherit;
  }
  ${mediaQuery("mobile")} {
    font-size: 1.5rem;
  }
`;

interface PageTitleProps {
  children?: JSX.Element;
  title: string;
  subject?: string | React.ReactNode;
  sideButton?: React.ReactNode;
}
const PageTitle = ({
  title,
  subject,
  sideButton,
  children,
}: PageTitleProps) => {
  return (
    <S.Container>
      <div className="titleBox">
        <Title>{title}</Title>
        {subject && <Subject>{subject}</Subject>}
      </div>
      {sideButton && <div className="sideBox">{sideButton}</div>}
    </S.Container>
  );
};

export default PageTitle;
