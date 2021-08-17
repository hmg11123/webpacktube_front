import { gql } from "apollo-boost";

export const GET_CHECK_EMAIL = gql`
 query getCheckEmail($email: String!) {
  getCheckEmail(email: $email)
 }
`;

export const CREATE_USER = gql`
 mutation createUser(
  $name: String!
  $avatar: String!
  $email: String!
  $nickName: String!
  $brith: String!
  $password: String!
  $mobile: String!
 ) {
  createUser(name: $name, avatar: $avatar, email: $email, nickName: $nickName, brith: $brith, password: $password, mobile: $mobile)
 }
`;
