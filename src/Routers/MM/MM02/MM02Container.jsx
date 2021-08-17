import React, { useCallback, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import MM02Presenter from "./MM02Presenter";
import { GET_LOGIN_USER } from "./MM02Queries";
import { useInput } from "../../../Hooks/useInput";

const MM02Container = ({ history }) => {
 const inputEmail = useInput(``);
 const inputPassword = useInput(``);
 const isLoginData = useInput(true);
 const {
  data: loginData,
  loading: loginLoading,
  refetch: loginRefetch,
 } = useQuery(GET_LOGIN_USER, {
  skip: isLoginData.value,
  variables: { email: inputEmail.value, password: inputPassword.value },
 });
 const moveLinkHandler = (link) => {
  history.push(`/${link}`);
 };

 const loginHandler = useCallback(() => {
  if (!inputEmail.value || inputEmail.value.trim() === "") {
   alert("이메일을 입력해주세요.");
   return;
  }
  if (!inputPassword.value || inputPassword.value.trim() === "") {
   alert("이메일을 입력해주세요.");
   return;
  }
  isLoginData.setValue(false);
 }, [inputEmail, inputPassword, isLoginData]);

 useEffect(() => {
  if (!isLoginData.value) {
   if (!loginLoading) {
    try {
     if (loginData && loginData.getLoginUser.isLogin) {
      alert("성공");
      sessionStorage.setItem("AS23SF23SFEF3WA5", loginData && loginData.getLoginUser.userData._id);
      history.push("/");
     } else {
      alert("[ERRER]");
      isLoginData.setValue(true);
     }
    } catch (e) {
     alert("없는 계정입니다.");
     isLoginData.setValue(true);
    }
   }
  }
 }, [isLoginData]);
 return (
  <MM02Presenter inputEmail={inputEmail} inputPassword={inputPassword} moveLinkHandler={moveLinkHandler} loginHandler={loginHandler} />
 );
};

export default MM02Container;
