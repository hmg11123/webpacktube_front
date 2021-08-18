import React from "react";
import { Route } from "react-router-dom";
import { WholWrapper } from "../../Components/commonComponents";
import MM00 from "../../Routers/MM/MM00";
import MM01 from "../../Routers/MM/MM01";
import MM02 from "../../Routers/MM/MM02";
import MM03 from "../../Routers/MM/MM03";
import MM04 from "../../Routers/MM/MM04";

const Content = () => {
 return (
  <WholWrapper>
   <Route exact path="/" component={MM00}></Route>
   <Route exact path="/signUp" component={MM01}></Route>
   <Route exact path="/signIn" component={MM02}></Route>
   <Route exact path="/mypage/:key" component={MM03}></Route>
   <Route exact path="/createVideo" component={MM04}></Route>
  </WholWrapper>
 );
};

export default Content;
