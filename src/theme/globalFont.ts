import Pretendard_Black_woff from "assets/font/Pretendard/woff/Pretendard-Black.woff";
import Pretendard_Black_woff2 from "assets/font/Pretendard/woff2/Pretendard-Black.woff2";

import Pretendard_ExtraBold_woff from "assets/font/Pretendard/woff/Pretendard-ExtraBold.woff";
import Pretendard_ExtraBold_woff2 from "assets/font/Pretendard/woff2/Pretendard-ExtraBold.woff2";

import Pretendard_Bold_woff from "assets/font/Pretendard/woff/Pretendard-Bold.woff";
import Pretendard_Bold_woff2 from "assets/font/Pretendard/woff2/Pretendard-Bold.woff2";

import Pretendard_SemiBold_woff from "assets/font/Pretendard/woff/Pretendard-SemiBold.woff";
import Pretendard_SemiBold_woff2 from "assets/font/Pretendard/woff2/Pretendard-SemiBold.woff2";

import Pretendard_Medium_woff from "assets/font/Pretendard/woff/Pretendard-Medium.woff";
import Pretendard_Medium_woff2 from "assets/font/Pretendard/woff2/Pretendard-Medium.woff2";

import Pretendard_Regular_woff from "assets/font/Pretendard/woff/Pretendard-Regular.woff";
import Pretendard_Regular_woff2 from "assets/font/Pretendard/woff2/Pretendard-Regular.woff2";

import Pretendard_Light_woff from "assets/font/Pretendard/woff/Pretendard-Light.woff";
import Pretendard_Light_woff2 from "assets/font/Pretendard/woff2/Pretendard-Light.woff2";

import Pretendard_ExtraLight_woff from "assets/font/Pretendard/woff/Pretendard-ExtraLight.woff";
import Pretendard_ExtraLight_woff2 from "assets/font/Pretendard/woff2/Pretendard-ExtraLight.woff2";

import Pretendard_Thin_woff from "assets/font/Pretendard/woff/Pretendard-Thin.woff";
import Pretendard_Thin_woff2 from "assets/font/Pretendard/woff2/Pretendard-Thin.woff2";

import WorkSans_Black_woff from "assets/font/WorkSans/woff/WorkSans-Black.woff";
import WorkSans_Black_woff2 from "assets/font/WorkSans/woff2/WorkSans-Black.woff2";

import WorkSans_ExtraBold_woff from "assets/font/WorkSans/woff/WorkSans-ExtraBold.woff";
import WorkSans_ExtraBold_woff2 from "assets/font/WorkSans/woff2/WorkSans-ExtraBold.woff2";

import WorkSans_Bold_woff from "assets/font/WorkSans/woff/WorkSans-Bold.woff";
import WorkSans_Bold_woff2 from "assets/font/WorkSans/woff2/WorkSans-Bold.woff2";

import WorkSans_SemiBold_woff from "assets/font/WorkSans/woff/WorkSans-SemiBold.woff";
import WorkSans_SemiBold_woff2 from "assets/font/WorkSans/woff2/WorkSans-SemiBold.woff2";

import WorkSans_Medium_woff from "assets/font/WorkSans/woff/WorkSans-Medium.woff";
import WorkSans_Medium_woff2 from "assets/font/WorkSans/woff2/WorkSans-Medium.woff2";

import WorkSans_Regular_woff from "assets/font/WorkSans/woff/WorkSans-Regular.woff";
import WorkSans_Regular_woff2 from "assets/font/WorkSans/woff2/WorkSans-Regular.woff2";

import WorkSans_Light_woff from "assets/font/WorkSans/woff/WorkSans-Light.woff";
import WorkSans_Light_woff2 from "assets/font/WorkSans/woff2/WorkSans-Light.woff2";

import WorkSans_ExtraLight_woff from "assets/font/WorkSans/woff/WorkSans-ExtraLight.woff";
import WorkSans_ExtraLight_woff2 from "assets/font/WorkSans/woff2/WorkSans-ExtraLight.woff2";

import WorkSans_Thin_woff from "assets/font/WorkSans/woff/WorkSans-Thin.woff";
import WorkSans_Thin_woff2 from "assets/font/WorkSans/woff2/WorkSans-Thin.woff2";

import { createGlobalStyle } from "styled-components";
export const GlobalFont = createGlobalStyle`

/* Pretendard */
@font-face {
	font-family: 'Pretendard';
	font-weight: 900;
	font-display: swap;
	src: local('Pretendard Black'), url(${Pretendard_Black_woff2}) format('woff2'), url(${Pretendard_Black_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-display: swap;
	src: local('Pretendard ExtraBold'), url(${Pretendard_ExtraBold_woff2}) format('woff2'), url(${Pretendard_ExtraBold_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url(${Pretendard_Bold_woff2}) format('woff2'), url(${Pretendard_Bold_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-display: swap;
	src: local('Pretendard SemiBold'), url(${Pretendard_SemiBold_woff2}) format('woff2'), url(${Pretendard_SemiBold_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url(${Pretendard_Medium_woff2}) format('woff2'), url(${Pretendard_Medium_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url(${Pretendard_Regular_woff2}) format('woff2'), url(${Pretendard_Regular_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url(${Pretendard_Light_woff2}) format('woff2'), url(${Pretendard_Light_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
	font-display: swap;
	src: local('Pretendard ExtraLight'), url(${Pretendard_ExtraLight_woff2}) format('woff2'), url(${Pretendard_ExtraLight_woff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
	font-display: swap;
	src: local('Pretendard Thin'), url(${Pretendard_Thin_woff2}) format('woff2'), url(${Pretendard_Thin_woff}) format('woff');
}


/* WORK SANS */

@font-face {
	font-family: 'WorkSans';
	font-weight: 900;
	font-display: swap;
	src: local('WorkSans Black'), url(${WorkSans_Black_woff2}) format('woff2'), url(${WorkSans_Black_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 800;
	font-display: swap;
	src: local('WorkSans ExtraBold'), url(${WorkSans_ExtraBold_woff2}) format('woff2'), url(${WorkSans_ExtraBold_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 700;
	font-display: swap;
	src: local('WorkSans Bold'), url(${WorkSans_Bold_woff2}) format('woff2'), url(${WorkSans_Bold_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 600;
	font-display: swap;
	src: local('WorkSans SemiBold'), url(${WorkSans_SemiBold_woff2}) format('woff2'), url(${WorkSans_SemiBold_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 500;
	font-display: swap;
	src: local('WorkSans Medium'), url(${WorkSans_Medium_woff2}) format('woff2'), url(${WorkSans_Medium_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 400;
	font-display: swap;
	src: local('WorkSans Regular'), url(${WorkSans_Regular_woff2}) format('woff2'), url(${WorkSans_Regular_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 300;
	font-display: swap;
	src: local('WorkSans Light'), url(${WorkSans_Light_woff2}) format('woff2'), url(${WorkSans_Light_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 200;
	font-display: swap;
	src: local('WorkSans ExtraLight'), url(${WorkSans_ExtraLight_woff2}) format('woff2'), url(${WorkSans_ExtraLight_woff}) format('woff');
}

@font-face {
	font-family: 'WorkSans';
	font-weight: 100;
	font-display: swap;
	src: local('WorkSans Thin'), url(${WorkSans_Thin_woff2}) format('woff2'), url(${WorkSans_Thin_woff}) format('woff');
}

`;
