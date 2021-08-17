import React, { useCallback, useContext, useEffect, useState } from "react";
import MM01Presenter from "./MM01Presenter";
import storageRef from "../../../filebase";
import { useInput, useMobileInput, useBirthInput } from "../../../Hooks/useInput";
import { CREATE_USER, GET_CHECK_EMAIL } from "./MM01Queries";
import { useMutation, useQuery } from "react-apollo-hooks";

const MM01Container = ({ history }) => {
 const inputName = useInput(``);
 const inputNickName = useInput(``);
 const inputEmail = useInput(``);
 const inputBrith = useBirthInput(``);
 const inputMobile = useMobileInput(``);
 const inputPassword = useInput(``);
 const inputCheckedPassword = useInput(``);
 const isCheckData = useInput(true);
 const isCheck = useInput(false);
 const originCheck = useInput("");
 const inputCheck = useInput("");

 const [isDialogOpen, setIsDialogOpen] = useState(false);
 const [imagePath, setImagePath] = useState(
  `https://firebasestorage.googleapis.com/v0/b/hmg-fileserver.appspot.com/o/WEBPACKTUBE%2Fuser%2Favatar%2Fdefault_image.jpeg?alt=media&token=8906d901-323e-4b0b-a52d-bd284882655c`,
 );

 const {
  data: checkData,
  loading: checkLoading,
  refetch: checkRefetch,
 } = useQuery(GET_CHECK_EMAIL, {
  skip: isCheckData.value,
  variables: { email: inputEmail.value },
 });

 const [createUserMutation] = useMutation(CREATE_USER);

 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const sendCheckCodeHandler = () => {
  if (!inputEmail.value || inputEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }
  isCheckData.setValue(false);
 };

 const _isDialogOpenToggle = () => {
  setIsDialogOpen(!isDialogOpen);
 };

 const checkCodeHandler = () => {
  console.log(originCheck.value);
  console.log(inputCheck.value);
  if (originCheck.value === inputCheck.value) {
   isCheck.setValue(true);
   alert("성공했습니다.");
   setIsDialogOpen(false);
  } else {
   alert("틀렸습니다.");
  }
 };

 const fileChangeHandler = useCallback(
  async (e) => {
   const originFile = e.target.files[0];
   const originFileName = e.target.files[0].name;

   console.log(originFile);
   console.log(originFileName);

   const D = new Date();

   const year = D.getFullYear() + "";
   const month = D.getMonth() + 1 + "";
   const date = D.getDate() + "";
   const hour = D.getHours() + "";
   const min = D.getMinutes() + "";
   const sec = D.getSeconds() + "";

   const suffix = year + month + date + hour + min + sec;

   const uploadFileName = originFileName + suffix;
   try {
    const storage = storageRef.child(`WEBPACKTUBE/user/avatar/${uploadFileName}`);

    await storage.put(originFile);
    const url = await storage.getDownloadURL();
    setImagePath(url);
    await alert("아바타를 이미지를 변경했습니다.");
   } catch (e) {
    console.log(e);
   }
  },
  [imagePath],
 );

 const createUserHandler = useCallback(async () => {
  if (!inputName.value || inputName.value.trim() === "") {
   alert("이름은 필수 입력사항 입니다.");
   return;
  }
  if (!inputNickName.value || inputNickName.value.trim() === "") {
   alert("닉네임은 필수 입력사항 입니다.");
   return;
  }
  if (!inputEmail.value || inputEmail.value.trim() === "") {
   alert("이메일은 필수 입력사항 입니다.");
   return;
  }
  if (!inputBrith.value || inputBrith.value.trim() === "") {
   alert("생년월일은 필수 입력사항 입니다.");
   return;
  }
  if (!inputMobile.value || inputMobile.value.trim() === "") {
   alert("전화번호은 필수 입력사항 입니다.");
   return;
  }
  if (!inputPassword.value || inputPassword.value.trim() === "") {
   alert("비밀번호는 필수 입력사항 입니다.");
   return;
  }
  if (inputPassword.value !== inputCheckedPassword.value) {
   alert("비밀번호가 같지 않습니다.");
   return;
  }

  if (!isCheck.value) {
   alert("이메일을 인증해주세요.");
   return;
  }
  const { data } = await createUserMutation({
   variables: {
    name: inputName.value,
    nickName: inputNickName.value,
    avatar: imagePath,
    email: inputEmail.value,
    brith: inputBrith.value,
    mobile: inputMobile.value,
    password: inputPassword.value,
   },
  });

  if (data.createUser) {
   alert("가입 성공");
   history.push("/signIn");
  } else {
   alert("애러발생~~~");
   return;
  }
 });

 useEffect(() => {
  if (!isCheckData.value) {
   if (checkData) {
    alert("인증코드를 보냈습니다.");
    isCheckData.setValue(true);
    console.log(checkData.getCheckEmail);
    originCheck.setValue(checkData.getCheckEmail);
    setIsDialogOpen(true);
   }
  }
 }, [isCheckData]);

 return (
  <MM01Presenter
   fileChangeHandler={fileChangeHandler}
   moveLinkHandler={moveLinkHandler}
   createUserHandler={createUserHandler}
   sendCheckCodeHandler={sendCheckCodeHandler}
   imagePath={imagePath}
   inputName={inputName}
   inputNickName={inputNickName}
   inputEmail={inputEmail}
   inputBrith={inputBrith}
   inputMobile={inputMobile}
   inputPassword={inputPassword}
   inputCheckedPassword={inputCheckedPassword}
   isDialogOpen={isDialogOpen}
   _isDialogOpenToggle={_isDialogOpenToggle}
   checkCodeHandler={checkCodeHandler}
   sendCheckCodeHandler={sendCheckCodeHandler}
   inputCheck={inputCheck}
   isCheck={isCheck}
  />
 );
};

export default MM01Container;
