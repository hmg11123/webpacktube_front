import { gql } from "apollo-boost";

export const GET_USER = gql`
 query getUser($id: String!) {
  getUser(id: $id) {
   avatar
  }
 }
`;
