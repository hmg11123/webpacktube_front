import React from "react";
import { useQuery } from "react-apollo-hooks";
import MM03Presenter from "./MM03Presenter";
import { GET_USER } from "./MM03Queries";

const MM03Container = ({ match }) => {
 const userKey = match.params.key;

 const {
  data: userData,
  loading: userLoading,
  refetch: userRefetch,
 } = useQuery(GET_USER, {
  variables: { id: userKey },
 });

 return <MM03Presenter userData={userData && userData.getUser} />;
};

export default MM03Container;
