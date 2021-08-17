import React from "react";
import styled from "styled-components";
import {
 Image,
 CommonInput,
 CommonTitle,
 FileLabel,
 FileInput,
 RsWrapper,
 WholWrapper,
 Wrapper,
 PText,
 CommonButton,
 SpanText,
} from "../../../Components/commonComponents";
import Theme from "../../../Styles/Theme";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { BiCheck } from "react-icons/bi";

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

const MM01Presenter = ({
 fileChangeHandler,
 moveLinkHandler,
 imagePath,
 inputName,
 inputNickName,
 inputEmail,
 inputBrith,
 inputMobile,
 inputPassword,
 inputCheckedPassword,
 createUserHandler,
 isDialogOpen,
 _isDialogOpenToggle,
 checkCodeHandler,
 sendCheckCodeHandler,
 inputCheck,
 isCheck,
}) => {
 return (
  <WholWrapper>
   <RsWrapper>
    <Wrapper margin={`50px 0`}>
     <CommonTitle borderBottom={`3px solid ${Theme.mainThemeColor}`}>회원가입</CommonTitle>
    </Wrapper>
    <Wrapper>
     <Wrapper dr={`row`}>
      <Wrapper width={`35%`} height={`700px`} al={`flex-end`} ju={`flex-start`}>
       <Image
        src={imagePath}
        width={`150px`}
        height={`150px`}
        radius={`100px`}
        border={`1px solid ${Theme.mainThemeColor}`}
        margin={`0 0 20px 0`}
       />
       <FileInput type="file" id="file-js" onChange={fileChangeHandler} accept=".gif, .jpg, .png, .jpge" />
       <FileLabel htmlFor="file-js" width={`150px`} height={`40px`} bgColor={Theme.mainThemeColor} radius={`5px`}>
        프로필 올리기
       </FileLabel>
      </Wrapper>
      <Wrapper width={`65%`} al={`flex-start`} margin={`70px 0`}>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>이름</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <CommonInput {...inputName} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
       </Wrapper>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>닉네임</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <CommonInput {...inputNickName} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
       </Wrapper>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>이메일</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <Wrapper width={`220px`}>
         <CommonInput {...inputEmail} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
         {isCheck.value ? (
          <BiCheck size={25} color={Theme.checkColor} />
         ) : (
          <CommonButton color={Theme.grayColor} width={`120px`} height={`20px`} onClick={() => sendCheckCodeHandler()}>
           이메일 확인하기
          </CommonButton>
         )}
        </Wrapper>
       </Wrapper>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>생년월일</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <CommonInput {...inputBrith} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
       </Wrapper>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>전화번호</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <CommonInput {...inputMobile} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
       </Wrapper>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>비밀번호</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <CommonInput {...inputPassword} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
       </Wrapper>
       <Wrapper width={`320px`} dr={`row`} ju={`space-between`} margin={`0 0 50px 100px`}>
        <Wrapper dr={`row`} width={`100px`} ju="flex-start">
         <PText>비밀번호 확인</PText>
         <PText color={Theme.redColor}>*</PText>
        </Wrapper>
        <CommonInput {...inputCheckedPassword} width={`200px`} padding={`10px`} borderBottom={`2px solid ${Theme.mainThemeColor}`} />
       </Wrapper>
      </Wrapper>
     </Wrapper>
    </Wrapper>
    <Wrapper margin={`0 0 100px 0`} dr={`row`}>
     <JoinButton
      width={`150px`}
      height={`40px`}
      margin={`10px`}
      bgColor={Theme.mainThemeColor}
      radius={`5px`}
      fontSize={`18px`}
      onClick={() => createUserHandler()}
     >
      가입하기
     </JoinButton>
     <CancelButton
      width={`150px`}
      height={`40px`}
      margin={`10px`}
      border={`2px solid ${Theme.mainThemeColor}`}
      radius={`5px`}
      fontSize={`18px`}
      onClick={() => moveLinkHandler(``)}
     >
      취소하기
     </CancelButton>
    </Wrapper>
   </RsWrapper>

   {/* Dialog Area */}
   {/**====================================================================== */}
   <Dialog onClose={_isDialogOpenToggle} aria-labelledby="customized-dialog-title" open={isDialogOpen} fullWidth={true}>
    <DialogTitle id="customized-dialog-title" onClose={_isDialogOpenToggle}>
     이메일 확인하기
    </DialogTitle>
    <DialogContent>
     <Wrapper>
      <SpanText>인증코드를 입력해주세요</SpanText>
      <CommonInput {...inputCheck} placeholder="인증코드를 입력해주세요" />
     </Wrapper>
    </DialogContent>
    <DialogActions>
     <Button color="primary" onClick={checkCodeHandler}>
      확인하기
     </Button>
     <Button color="secondary" onClick={_isDialogOpenToggle}>
      취소
     </Button>
    </DialogActions>
   </Dialog>

   {/* Dialog Area */}
  </WholWrapper>
 );
};

export default MM01Presenter;
