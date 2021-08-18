import React from "react";
import { CommonTitle, RsWrapper, SpanText, WholWrapper, Wrapper, Image, CommonButton } from "../../../Components/commonComponents";
import Theme from "../../../Styles/Theme";

const MM03Presenter = ({ userData }) => {
 return (
  <WholWrapper>
   <RsWrapper>
    <Wrapper dr={`row`}>
     <Wrapper margin={`50px 0 0 0`}>
      <CommonTitle borderBottom={`3px solid ${Theme.mainThemeColor}`}>마이페이지</CommonTitle>
     </Wrapper>
     <Wrapper>
      <Wrapper width={`130px`} margin={`70px 0 0 0`}>
       <Image
        src={userData ? userData.avatar : "로딩중"}
        width={`120px`}
        height={`120px`}
        radius={`100px`}
        border={`1px solid ${Theme.mainThemeColor}`}
        margin={`0 0 20px 0`}
       />
      </Wrapper>
      <Wrapper dr={`row`} ju={`space-around`} width={`400px`} margin={`70px 0 0 0`}>
       <Wrapper width={`100px`}>
        <SpanText padding={`5px`} fontSize={`20px`}>
         0
        </SpanText>
        <SpanText padding={`5px`} fontSize={`20px`}>
         게시물
        </SpanText>
       </Wrapper>
       <Wrapper width={`100px`}>
        <SpanText padding={`5px`} fontSize={`20px`}>
         0
        </SpanText>
        <SpanText padding={`5px`} fontSize={`20px`}>
         팔로우
        </SpanText>
       </Wrapper>
       <Wrapper width={`100px`}>
        <SpanText padding={`5px`} fontSize={`20px`}>
         0
        </SpanText>
        <SpanText padding={`5px`} fontSize={`20px`}>
         팔로워
        </SpanText>
       </Wrapper>
      </Wrapper>
      <Wrapper margin={`50px 0 0 0`}>
       <Wrapper dr={`row`}>
        <Wrapper al={`flex-start`} width={`200px`} margin={`40px 0 0 100px`}>
         <SpanText width={`100%`} fontSize={`22px`} padding={`5px`} borderBottom={`2px solid ${Theme.mainThemeColor}`}>
          이름
         </SpanText>
         <SpanText padding={`5px`}>{userData ? userData.name : "로딩중"}</SpanText>
        </Wrapper>
        <Wrapper al={`flex-start`} width={`200px`} margin={`40px 0 0 100px`}>
         <SpanText width={`100%`} fontSize={`22px`} padding={`5px`} borderBottom={`2px solid ${Theme.mainThemeColor}`}>
          닉네임
         </SpanText>
         <SpanText padding={`5px`}>{userData ? userData.nickName : "로딩중"}</SpanText>
        </Wrapper>
        <Wrapper al={`flex-start`} width={`200px`} margin={`40px 0 0 100px`}>
         <SpanText width={`100%`} fontSize={`22px`} padding={`5px`} borderBottom={`2px solid ${Theme.mainThemeColor}`}>
          이메일
         </SpanText>
         <SpanText padding={`5px`}>{userData ? userData.email : "로딩중"}</SpanText>
        </Wrapper>
       </Wrapper>
       <Wrapper dr={`row`} margin={`50px 0 0 0`}>
        <Wrapper al={`flex-start`} width={`200px`} margin={`40px 0 0 100px`}>
         <SpanText width={`100%`} fontSize={`22px`} padding={`5px`} borderBottom={`2px solid ${Theme.mainThemeColor}`}>
          생년월일
         </SpanText>
         <SpanText padding={`5px`}>{userData ? userData.brith : "로딩중"}</SpanText>
        </Wrapper>
        <Wrapper al={`flex-start`} width={`200px`} margin={`40px 0 0 100px`}>
         <SpanText width={`100%`} fontSize={`22px`} padding={`5px`} borderBottom={`2px solid ${Theme.mainThemeColor}`}>
          전화번호
         </SpanText>
         <SpanText padding={`5px`}>{userData ? userData.mobile : "로딩중"}</SpanText>
        </Wrapper>
        <Wrapper al={`flex-start`} width={`200px`} margin={`40px 0 0 100px`}>
         <SpanText width={`100%`} fontSize={`22px`} padding={`5px`} borderBottom={`2px solid ${Theme.mainThemeColor}`}>
          생성날짜
         </SpanText>
         <SpanText padding={`5px`}>{userData ? userData.createdAt.substring(0, 10).replace(/[-]/g, ".") : "로딩중"}</SpanText>
        </Wrapper>
       </Wrapper>
      </Wrapper>
     </Wrapper>
     <Wrapper>
      <CommonButton>수정하기</CommonButton>
     </Wrapper>
    </Wrapper>

    {/** ================================================ */}
    {/** ===================== border =================== */}
    {/** ================================================ */}
    <Wrapper margin={`120px 0 0 0`} height={`1000px`}>
     <Wrapper>
      <CommonTitle borderBottom={`3px solid ${Theme.mainThemeColor}`}>내 동영상</CommonTitle>
     </Wrapper>
     <Wrapper margin={`100px 0 0 0`}>
      <Wrapper width={`1000px`} dr={`row`} borderTop={`2px solid ${Theme.subThemeColor}`} borderBottom={`2px solid ${Theme.subThemeColor}`}>
       <SpanText al={`center`} width={`10%`} padding={`20px 0`}>
        번호
       </SpanText>
       <SpanText width={`40%`} padding={`20px 0`}>
        제목
       </SpanText>
       <SpanText width={`40%`} padding={`20px 0`}>
        썸네일
       </SpanText>
       <SpanText al={`center`} width={`10%`} padding={`20px 0`}>
        등록날짜
       </SpanText>
      </Wrapper>
      {/** 데이터용 */}
      <Wrapper width={`1000px`} dr={`row`} borderBottom={`2px solid ${Theme.gray2Color}`}>
       <SpanText al={`center`} width={`10%`} padding={`20px 0`}>
        1
       </SpanText>
       <SpanText width={`40%`} padding={`20px 0`}>
        test
       </SpanText>
       <Wrapper width={`40%`} padding={`20px 0`} al={`flex-start`}>
        <Image width={`120px`} height={`auto`} src="http://www.palnews.co.kr/news/photo/201801/92969_25283_5321.jpg" alt="썸네일"></Image>
       </Wrapper>
       <SpanText al={`center`} width={`10%`} padding={`20px 0`}>
        2021.08.17
       </SpanText>
      </Wrapper>
     </Wrapper>
    </Wrapper>
   </RsWrapper>
  </WholWrapper>
 );
};

export default MM03Presenter;
