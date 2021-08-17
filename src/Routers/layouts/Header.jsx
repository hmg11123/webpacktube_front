import React, { useState } from "react";
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
  display: block;
  width: 0;
  z-index: 1;
  top: -15px;
  left: 51px;
 }
`;

const Header = ({ history }) => {
 const [isTapStatus, setIsTapStatus] = useState(false);
 const userId = sessionStorage.getItem("AS23SF23SFEF3WA5");

 const moveLinkHander = (link) => {
  history.push(`/${link}`);
 };

 const tapClickHandler = () => {
  setIsTapStatus(!isTapStatus);
 };

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
     <Wrapper isRelative={true} height={`365px`}>
      <Image
       border={`2px solid ${Theme.mainThemeColor}`}
       width={`40px`}
       height={`40px`}
       radius={`100px`}
       src={userData ? userData.getUser.avatar : ""}
       onClick={() => tapClickHandler()}
      />
      <UserTapBox
       translate={`0.3s`}
       display={isTapStatus ? `flex` : `none`}
       width={`130px`}
       height={`140px`}
       bgColor={Theme.mainThemeColor}
       isAbsolute={true}
       bottom={`0`}
       radius={`10px`}
      >
       <UserTapButton borderBottom={`2px solid ${Theme.whiteColor}`} color={Theme.whiteColor} margin={`10px`}>
        영상추가하기
       </UserTapButton>
       <UserTapButton borderBottom={`2px solid ${Theme.whiteColor}`} color={Theme.whiteColor} margin={`10px`}>
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
