import React from "react";
import { CommonButton, PText, WholWrapper, Wrapper } from "../../../Components/commonComponents";
import { AiOutlineHome, AiOutlineCompass, AiOutlineUnorderedList } from "react-icons/Ai";
import Theme from "../../../Styles/Theme";
import styled from "styled-components";

const LelfTabWrapper = styled(Wrapper)`
 width: 100%;
 height: 40px;
 flex-direction: row;
 color: ${Theme.blackColor};
 background-color: ${Theme.mainThemeColor};

 &:hover {
  background-color: rgba(241, 196, 16, 0.7);
 }
`;

const MM00Presenter = () => {
 return (
  <WholWrapper>
   <Wrapper dr={`row`} al={`flex-start`}>
    <Wrapper width={`12%`} height={`1000px`} ju={`flex-start`}>
     <LelfTabWrapper>
      <PText al={`center`} width={`50%`}>
       <AiOutlineHome />
      </PText>
      <PText width={`50%`}>홈</PText>
     </LelfTabWrapper>
     <LelfTabWrapper>
      <PText al={`center`} width={`50%`}>
       <AiOutlineCompass />
      </PText>
      <PText width={`50%`}>탐색</PText>
     </LelfTabWrapper>
     <LelfTabWrapper>
      <PText al={`center`} width={`50%`}>
       <AiOutlineUnorderedList />
      </PText>
      <PText width={`50%`}>구독</PText>
     </LelfTabWrapper>
    </Wrapper>
    <Wrapper width={`88%`} al={`flex-start`} ju={`flex-start`}>
     <Wrapper ju={`flex-start`} al={`flex-start`} width={`650px`} borderLeft={`2px solid ${Theme.mainThemeColor}`}>
      영상들
     </Wrapper>
    </Wrapper>
   </Wrapper>
  </WholWrapper>
 );
};

export default MM00Presenter;
