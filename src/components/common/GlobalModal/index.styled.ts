import { motion } from "framer-motion";
import styled from "styled-components";
const Container = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;
const Dimmer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: inline-flex;
  justify-content: center;
  z-index: 1;
`;
export const S = {
  Container,
  Dimmer,
  Content,
};
