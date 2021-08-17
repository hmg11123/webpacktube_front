import { gql } from "apollo-boost";

export const GET_LOGIN_USER = gql`
 query getLoginUser($email: String!, $password: String!) {
  getLoginUser(email: $email, password: $password) {
   isLogin
   userData {
    _id
   }
  }
 }
`;
