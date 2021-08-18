import React from "react";
import {
 CommonButton,
 Image,
 HamburgerLine,
 HamburgerBody,
 PText,
 WholWrapper,
 Wrapper,
 RsWrapper,
 SpanText,
} from "../../../Components/commonComponents";
import { AiOutlineHome, AiOutlineCompass, AiOutlineUnorderedList } from "react-icons/Ai";
import Theme from "../../../Styles/Theme";
import styled from "styled-components";

const LelfTabWrapper = styled(Wrapper)`
 width: 100%;
 height: 40px;
 flex-direction: row;
 color: ${Theme.blackColor};
 background-color: ${(props) => props.bgColor || Theme.mainThemeColor};

 border-bottom: 1px solid ${Theme.whiteColor};

 &:hover {
  background-color: ${Theme.subThemeColor};
 }
`;

const MM00Presenter = ({ moveTabHandler, navOpenHandler, isNav, tab }) => {
 return (
  <WholWrapper>
   <Wrapper dr={`row`} al={`flex-start`}>
    <Wrapper>
     <Wrapper width={`100px`}>
      <HamburgerBody width={`40px`} height={`40px`} bgColor={Theme.mainThemeColor} radius={`4px`} onClick={() => navOpenHandler()}>
       <HamburgerLine width={`20px`} margin={`3px 0`} border={`1px solid ${Theme.blackColor}`} />
       <HamburgerLine width={`20px`} margin={`3px 0`} border={`1px solid ${Theme.blackColor}`} />
       <HamburgerLine width={`20px`} margin={`3px 0`} border={`1px solid ${Theme.blackColor}`} />
      </HamburgerBody>
     </Wrapper>
     <Wrapper
      display={isNav ? `flex` : `none`}
      isFixed={true}
      top={`0`}
      left={`0`}
      margin={`130px 0 0 40px`}
      width={`150px`}
      height={`1000px`}
      ju={`flex-start`}
     >
      <LelfTabWrapper bgColor={tab === 1 && `${Theme.subThemeColor}`} onClick={() => moveTabHandler(1)}>
       <PText al={`center`} width={`50%`} color={Theme.whiteColor}>
        <AiOutlineHome />
       </PText>
       <PText width={`50%`} color={Theme.whiteColor}>
        홈
       </PText>
      </LelfTabWrapper>
      <LelfTabWrapper bgColor={tab === 2 && `${Theme.subThemeColor}`} onClick={() => moveTabHandler(2)}>
       <PText al={`center`} width={`50%`} color={Theme.whiteColor}>
        <AiOutlineCompass />
       </PText>
       <PText width={`50%`} color={Theme.whiteColor}>
        탐색
       </PText>
      </LelfTabWrapper>
      <LelfTabWrapper bgColor={tab === 3 && `${Theme.subThemeColor}`} onClick={() => moveTabHandler(3)}>
       <PText al={`center`} width={`50%`} color={Theme.whiteColor}>
        <AiOutlineUnorderedList />
       </PText>
       <PText width={`50%`} color={Theme.whiteColor}>
        구독
       </PText>
      </LelfTabWrapper>
     </Wrapper>
    </Wrapper>
    <RsWrapper margin={`50px 0 0 0`} al={`flex-start`} ju={`center`}>
     <Wrapper display={tab === 1 ? `flex` : `none`} dr={`row`} wrap={`wrap`}>
      <Wrapper
       shadow={`2px 2px 2px ${Theme.mainThemeColor}`}
       width={`320px`}
       height={`270px`}
       margin={`15px`}
       padding={`10px`}
       ju={`flex-start`}
      >
       <Image width={`280px`} height={`170px`} bgColor={Theme.grayColor} alt="이미지" />
       <Wrapper dr={`row`}>
        <Wrapper dr={`row`} margin={`0 0 10px 0`}>
         <Image width={`45px`} height={`45px`} margin={`10px`} bgColor={Theme.grayColor} radius={`100%`} alt="user" />
         <Wrapper width={`200px`} al={`flex-start`}>
          <SpanText lineHeight={`30px`}>title</SpanText>
          <SpanText color={Theme.gray3Color}>author</SpanText>
         </Wrapper>
        </Wrapper>
        <Wrapper dr={`row`} ju={`space-around`}>
         <SpanText color={Theme.gray3Color}>조회수 100만회</SpanText>
         <SpanText color={Theme.gray3Color}>2021.08.17</SpanText>
        </Wrapper>
       </Wrapper>
      </Wrapper>
     </Wrapper>
     <Wrapper display={tab === 2 ? `flex` : `none`}>탐색</Wrapper>
     <Wrapper display={tab === 3 ? `flex` : `none`}>구독</Wrapper>
    </RsWrapper>
   </Wrapper>
  </WholWrapper>
 );
};

export default MM00Presenter;
