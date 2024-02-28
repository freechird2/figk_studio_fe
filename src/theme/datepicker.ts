import CELL from 'assets/icon/Cell.svg'
import { createGlobalStyle } from 'styled-components'
import { mediaQuery } from './mediaQuery'
export const DatePickerStyle = createGlobalStyle`
   .react-datepicker {
    width: 100%;
    border-color: ${(p) => p.theme.lineColor.line2};
    box-shadow: 0 4px 8px 0 rgba(82, 86, 92, 0.05);
    padding: 16px;
  }

 

  .react-datepicker__month-container {
    width: 100%;
    float: initial;
  }
  //헤더 커스텀 스타일
  .react-datepicker__header.react-datepicker__header--custom {
    border: none;
    border-radius: 0;
    padding: 0;
    background-color: transparent;
    //요일 박스 스타일
    .react-datepicker__day-names {
      display: flex;
      justify-content: space-between;
      margin: 0;
      .react-datepicker__day-name {
        line-height: 28px;
        width: 28px;
        height: 28px;
        font-size: 1.2rem;
        margin: 0;
        color: ${(p) => p.theme.textColor.textColor60};
        ${mediaQuery('mobile')}{
  font-size: 1.5rem;
  width: calc(100%/7);
  aspect-ratio: 1/1;
  height: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 20px; */
  

 }
        &:first-child {
          color: ${(p) => p.theme.palette.error};
        }
      }
    }
  }
  //바디 커스텀 스타일
  .react-datepicker__month {
    margin: 0;
    .react-datepicker__week {
      display: flex;
      justify-content: center;
      ${mediaQuery('mobile')}{
  width: 100%;
  justify-content: space-between;
 }
      &:not(:last-of-type){
        margin-bottom:4px ;
      }
      .react-datepicker__day {
        overflow: hidden;
        width: 28px;
        height: 28px;
        line-height: 28px;
        font-size: 1.2rem;
        margin: 0;
        border-radius: 0;
        user-select: none;
      
        ${mediaQuery('mobile')}{
  font-size: 1.6rem;
  width: calc(100%/7);
  aspect-ratio: 1/1;
  height: initial;
  display: flex;

  align-items: center;
  justify-content: center;
 }

      
        //오늘
        &.react-datepicker__day--today {
          position: relative;
          font-weight: 400;
          &:after {
            content: "";
            display: block;
            position: absolute;
            bottom: 4px;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            width: 3px;
            height: 3px;
            background-color: ${(p) => p.theme.palette.gray40};
            border-radius: 50%;
            ${mediaQuery('mobile')}{
              bottom:6px;
            }
          }
        }
        //주말
        &.react-datepicker__day--weekend {
          //일요일만
          &:first-of-type {
            color: ${(p) => p.theme.palette.error};
            border-top-left-radius:50% ;
                      border-bottom-left-radius:50% ;
          
           
          }
          &:last-of-type{
              border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
            }
        }
        //이전 달 혹은 다음달 여분의 날짜 스타일
        &.react-datepicker__day--outside-month {
          color: ${(p) => p.theme.palette.gray30};
          //주말
          &.react-datepicker__day--weekend {
            //일요일만
            &:first-of-type {
                color:#FDDDDB;
            }
          }

          &:hover{
            color: ${(p) => p.theme.palette.gray30};
            &.react-datepicker__day--weekend {
            //일요일만
            &:first-of-type {
                color:#FDDDDB;
            }
          }
          }
        }

        &.react-datepicker__day--keyboard-selected{
            background-color: transparent;
        }


        &.react-datepicker__day--in-selecting-range{
            color: ${(p) => p.theme.palette.black10};
            background-color: ${(p) => p.theme.palette.light20};
            &.react-datepicker__day--weekend {

            //일요일만
            &:first-of-type {
                color: ${(p) => p.theme.palette.error};
            }
          }
        }
        &.react-datepicker__day--selecting-range-start,
        &.react-datepicker__day--selecting-range-end{
            color: #fff;
            background-image: url(${CELL});
            background-size: 100%;
            background-repeat: no-repeat;
            background-color: ${(p) => p.theme.palette.light20} !important;
            &:hover{
                color: #fff !important;
            }
        }

        &.react-datepicker__day--in-range{
            color: ${(p) => p.theme.palette.black10};
            background-color: ${(p) => p.theme.palette.light20};
            &:first-of-type{
  border-top-left-radius:50% ;
            border-bottom-left-radius:50% ;
            }
            &:last-of-type{
              border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
            }
            &:hover{
                color: ${(p) => p.theme.palette.black10};
                background-color: ${(p) => p.theme.palette.light20};
            }
        }
        &.react-datepicker__day--selecting-range-start{
            border-top-left-radius:50% ;
            border-bottom-left-radius:50% ;
        }
        &.react-datepicker__day--selecting-range-end{
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
        }

        &.react-datepicker__day--range-start,&.react-datepicker__day--range-end{
            color: #fff;
            background-image: url(${CELL});
            background-size: 100%;
            background-repeat: no-repeat;
            background-color: ${(p) => p.theme.palette.light20} !important;
            &:hover{
                color: #fff !important;
            }
        }
        &.react-datepicker__day--range-start{
            border-top-left-radius:50% ;
            border-bottom-left-radius:50% ;
        }
        &.react-datepicker__day--range-end{
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
        }

        //hover Style
        &:hover{
            color: ${(p) => p.theme.textColor.textColor90};
            background-color: transparent;

        }
      }
    }

  }
`
