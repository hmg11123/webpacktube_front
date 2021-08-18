import React, { useCallback, useState } from "react";
import { useInput } from "../../../Hooks/useInput";
import MM00Presenter from "./MM00Presenter";

const MM00Container = () => {
 const [isNav, setIsNav] = useState(true);
 const [tab, setTab] = useState(1);

 const navOpenHandler = useCallback(() => {
  setIsNav(!isNav);
 }, [isNav]);

 const moveTabHandler = (tabNumber) => {
  setTab(tabNumber);
 };
 return <MM00Presenter navOpenHandler={navOpenHandler} isNav={isNav} tab={tab} moveTabHandler={moveTabHandler} />;
};

export default MM00Container;
