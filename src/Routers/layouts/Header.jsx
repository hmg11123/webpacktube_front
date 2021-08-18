import React, { useState, useCallback } from "react";
import { SearchBox, CommonButton, WholWrapper, Wrapper, Image, SearchIcon } from "../../Components/commonComponents";
import styled from "styled-components";
import Theme from "../../Styles/Theme";
import { GET_USER } from "./layoutQueries";
import { useQuery } from "react-apollo-hooks";
import { AiOutlineSearch } from "react-icons/Ai";
import { RiContrastLine } from "react-icons/Ri";

const SignButton = styled(CommonButton)`
 color: ${Theme.whiteColor};
 transition: 0.3s;
 &:hover {
  font-size: 22px;
  font-weight: 600;
  color: ${Theme.mainThemeColor};
 }
`;

const UserTapButton = styled(CommonButton)`
 transition: 0.3s;
 &:hover {
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600px;
 }
`;

const UserTapBox = styled(Wrapper)`
 &::after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 0 13px 15px;
  border-color: ${Theme.mainThemeColor} transparent;
  /* border-color: ${Theme.blackColor} transparent; */
  display: block;
  width: 0;
  z-index: 1;
  top: 0px;
  left: 52px;
 }
`;

const Header = ({ history }) => {
 const [isTapStatus, setIsTapStatus] = useState(false);
 const userId = sessionStorage.getItem("AS23SF23SFEF3WA5");

 const moveLinkHander = (link) => {
  history.push(`/${link}`);
 };

 const tapClickHandler = useCallback(() => {
  console.log("클릭");
  setIsTapStatus(!isTapStatus);
 }, [isTapStatus]);

 const {
  data: userData,
  loading: userLoading,
  refetch: userRefetch,
 } = useQuery(GET_USER, {
  skip: userId ? false : true,
  variables: {
   id: userId,
  },
 });

 const logoutClickHandler = async () => {
  sessionStorage.removeItem("AS23SF23SFEF3WA5");
  userRefetch();
  history.push("/");
  alert("로그아웃 하셨습니다.");
 };
 return (
  <WholWrapper dr={`row`} height={`70px`} bgColor={`#000`} color={`#fff`}>
   <Wrapper onClick={() => moveLinkHander(``)} width={`25%`}>
    logo
   </Wrapper>
   <Wrapper width={`50%`} dr={`row`}>
    <SearchBox />
    <SearchIcon>
     <AiOutlineSearch />
    </SearchIcon>
   </Wrapper>
   <Wrapper width={`25%`} dr={`row`} ju={`flex-end`}>
    {sessionStorage.getItem("AS23SF23SFEF3WA5") ? (
     <Wrapper>
      <Image
       border={`2px solid ${Theme.mainThemeColor}`}
       width={`40px`}
       height={`40px`}
       radius={`100px`}
       src={userData ? userData.getUser.avatar : ""}
       onClick={() => tapClickHandler()}
      />
      <Wrapper width={`130px`} isAbsolute={true} height={`170px`} top={`0`} margin={`62px 0 0 0`}>
       <UserTapBox
        translate={`0.3s`}
        display={isTapStatus ? `flex` : `none`}
        width={`130px`}
        height={`140px`}
        bgColor={Theme.mainThemeColor}
        radius={`10px`}
        //    isAbsolute={true}
        //    top={`0`}
        //    margin={`90px 0 0 0`}
       >
        <UserTapButton
         borderBottom={`2px solid ${Theme.whiteColor}`}
         color={Theme.whiteColor}
         margin={`10px`}
         onClick={() => moveLinkHander(`createVideo`)}
        >
         영상추가하기
        </UserTapButton>
        <UserTapButton
         borderBottom={`2px solid ${Theme.whiteColor}`}
         color={Theme.whiteColor}
         margin={`10px`}
         onClick={() => moveLinkHander(`mypage/${userId}`)}
        >
         마이페이지
        </UserTapButton>
        <UserTapButton
         borderBottom={`2px solid ${Theme.whiteColor}`}
         color={Theme.whiteColor}
         margin={`10px`}
         onClick={() => logoutClickHandler()}
        >
         로그아웃
        </UserTapButton>
       </UserTapBox>
      </Wrapper>
     </Wrapper>
    ) : (
     <Wrapper dr={`row`}>
      <SignButton onClick={() => moveLinkHander(`signIn`)}>로그인</SignButton>
      <SignButton onClick={() => moveLinkHander(`signUp`)}>회원가입</SignButton>
     </Wrapper>
    )}
   </Wrapper>
  </WholWrapper>
 );
};

export default Header;
