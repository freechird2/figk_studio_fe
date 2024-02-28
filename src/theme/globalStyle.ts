import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,button,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	line-height: 1;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Pretendard';
	font-weight: 300;
	word-break: keep-all;
	box-sizing: border-box;
	color: #0F0F0F;
}

address{
font-style: normal;
}

/* HTML5 display-role reset for older browsers */
html,body{
	font-size: 62.5%;
	height: 100%;
	background-color: ${(p) => p.theme.bgColor.bg1};
	scrollbar-gutter: stable;
}
#root{
	height: inherit;
	background-color: ${(p) => p.theme.bgColor.bg1};
}
/* *:not(html) {
  padding: 0;
  margin: 0;
  font-family: "Pretendard";
  font-size: 1.4rem;
  font-weight: 300;
  // color: $gray1000;
  line-height: 1.5;
  // letter-spacing: -0.015px;
  box-sizing: border-box;
  color: #0F0F0F;
} */












body {
	background-color: ${(props) => props.theme.bgColor.bg1};
	
	line-height: 1;
	&::-webkit-scrollbar{
		/* display: none; */
	}
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

img{
	display: block;
	width: 100%;
}
video{
	display: block;
}
input,a,button,select{
	outline: none;

}
input{
	margin: 0;
	padding:0;
	border:0;
	box-sizing: border-box;
	/* 크롬 자동완성 배경색 초기화  */
	&:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px ${(p) => p.theme.bgColor.bg1} inset;
	box-shadow: 0 0 0 1000px  ${(p) => p.theme.bgColor.bg1} inset;
	-webkit-box-shadow: 0 0 0 1000px #fff inset;
	box-shadow: 0 0 0 1000px #fff inset;
}	
}

button{
	background-color: initial;
	border: initial;
	cursor: pointer;
}


a{
	text-decoration: none;
}

select{
	border: none;
}


svg{
	path{
		transition: 0.2s ease;
    }
}


`
