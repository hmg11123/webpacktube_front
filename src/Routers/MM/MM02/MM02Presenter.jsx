import React from "react";
import { CommonButton, CommonInput, CommonTitle, PText, RsWrapper, WholWrapper, Wrapper } from "../../../Components/commonComponents";
import Theme from "../../../Styles/Theme";
import styled from "styled-components";

const JoinButton = styled(CommonButton)`
 transition: 0.2s;
 &:hover {
  background-color: ${Theme.whiteColor};
  border: 2px solid ${Theme.mainThemeColor};
 }
`;

const CancelButton = styled(CommonButton)`
 transition: 0.2s;
 &:hover {
  background-color: ${Theme.mainThemeColor};
 }
`;

const MM02Presenter = ({ moveLinkHandler, loginHandler, inputEmail, inputPassword }) => {
 return (
  <WholWrapper>
   <RsWrapper>
    <Wrapper margin={`120px 0 0 0`}>
     <CommonTitle borderBottom={`3px solid ${Theme.mainThemeColor}`}>로그인</CommonTitle>
    </Wrapper>
    <Wrapper margin={`150px 0 100px 0`}>
     <Wrapper width={`290px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 0px`}>
      <PText>이메일</PText>
      <CommonInput width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} {...inputEmail} />
     </Wrapper>
     <Wrapper width={`290px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 0px`}>
      <PText>비밀번호</PText>
      <CommonInput width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} {...inputPassword} />
     </Wrapper>
    </Wrapper>
    <Wrapper margin={`0 0 70px 0`} dr={`row`}>
     <JoinButton
      width={`150px`}
      height={`40px`}
      margin={`10px`}
      bgColor={Theme.mainThemeColor}
      radius={`5px`}
      fontSize={`18px`}
      onClick={() => loginHandler()}
     >
      로그인
     </JoinButton>
     <CancelButton
      width={`150px`}
      height={`40px`}
      margin={`10px`}
      border={`2px solid ${Theme.mainThemeColor}`}
      radius={`5px`}
      fontSize={`18px`}
      onClick={() => moveLinkHandler("")}
     >
      취소하기
     </CancelButton>
    </Wrapper>
   </RsWrapper>
  </WholWrapper>
 );
};

export default MM02Presenter;
