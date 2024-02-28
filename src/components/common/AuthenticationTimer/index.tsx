import { useEffect, useState } from "react";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const StyledTimer = styled.span`
  color: ${(p) => p.theme.palette.error};
  align-self: center;
  font-size: 1.2rem;
  ${mediaQuery("maxTablet")} {
    font-size: 1.3rem;
  }
`;

interface AuthenticationTimerProps {
  expirationTime: number;
  onTimeout: () => void;
}
const AuthenticationTimer = ({
  expirationTime,
  onTimeout,
}: AuthenticationTimerProps) => {
  const [remainingTime, setRemainingTime] = useState(expirationTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        onTimeout();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime, onTimeout]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <StyledTimer>
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </StyledTimer>
  );
};

export default AuthenticationTimer;
