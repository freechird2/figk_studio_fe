import { Root } from "App";
import CoverLetter from "components/layout/Form/CoverLetter";
import FindPassword from "components/layout/Form/FindPassword";
import Join from "components/layout/Form/Join";
import Login from "components/layout/Form/Login";
import Terms from "components/layout/Form/Terms";
import Form from "pages/Form";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import NoticeBoard from "pages/NoticeBoard";
import Profile from "pages/Profile";
import Sending from "pages/Sending";
import SendingList from "pages/SendingList";
import Settlement from "pages/Settlement";
import DetailSettlement from "pages/Settlement/Detail";
import TermsPage from "pages/Terms";
import TextDesc from "pages/TextDesc";
import Voting from "pages/Voting";
import Writing from "pages/Writing";
import { createBrowserRouter } from "react-router-dom";

export const ROUTER_PATH = {
  FORM: "/",
  LOGIN: "/",
  FIND_PASSWORD: "/form/find-password",
  TERMS: "/form/terms",
  JOIN: "/form/join",
  COVERLETTER: "/form/coverletter", //회원가입 자기소개 phase
  HOME: "/home",
  WRITING: "/writing",
  SENDING: "/sending", //Figk 송고
  SENDING_LIST: "/sending-list",
  SETTLEMENT: "/settlement",
  DETAIL_SETTLEMENT: "/settlement/detail",
  PROFILE: "/profile",
  NOTICE_BOARD: "/notice",
  VOTING: "/voting",
  //홈 내글 상세
  TEXT_DESC: "/text-desc",
  //약관
  TERMS_PAGE: "/terms",
  // 개인정보처리방침 : privacy-policy
  PRIVACY_POLICY: "privacy-policy",
  // 저작권정책: copyright-policy
  COPYRIGHT_POLICY: "copyright-policy",
  // 이용약관: terms-of-use
  TERMS_OF_USE: "terms-of-use",
  // 마케팅수신동의: marketing-opt-in
  MARKETING_OTP_IN: "marketing-opt-in",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: ROUTER_PATH.FORM,
        element: <Form />,
        children: [
          {
            path: ROUTER_PATH.LOGIN,
            element: <Login />,
          },
          {
            path: ROUTER_PATH.FIND_PASSWORD,
            element: <FindPassword />,
          },
          {
            path: ROUTER_PATH.TERMS,
            element: <Terms />,
          },
          {
            path: ROUTER_PATH.JOIN,
            element: <Join />,
          },
          {
            path: ROUTER_PATH.COVERLETTER,
            element: <CoverLetter />,
          },
        ],
      },
      {
        path: ROUTER_PATH.HOME,
        element: <Home />,
      },
      {
        path: ROUTER_PATH.WRITING,
        element: <Writing />,
      },
      {
        path: ROUTER_PATH.SENDING,
        element: <Sending />,
      },
      {
        path: ROUTER_PATH.SENDING_LIST,
        element: <SendingList />,
      },
      {
        path: ROUTER_PATH.SETTLEMENT,
        element: <Settlement />,
      },
      {
        path: ROUTER_PATH.DETAIL_SETTLEMENT,
        element: <DetailSettlement />,
      },
      {
        path: ROUTER_PATH.SETTLEMENT,
        element: <Settlement />,
      },
      {
        path: ROUTER_PATH.PROFILE,
        element: <Profile />,
      },

      {
        path: ROUTER_PATH.NOTICE_BOARD,
        element: <NoticeBoard />,
      },
      {
        path: ROUTER_PATH.VOTING,
        element: <Voting />,
      },
      {
        path: ROUTER_PATH.TEXT_DESC,
        element: <TextDesc />,
      },
      {
        path: ROUTER_PATH.TERMS_PAGE,
        element: <TermsPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
