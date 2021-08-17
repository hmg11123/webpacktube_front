import styled from "styled-components";
import Theme from "../Styles/Theme";

// ================= Wrapper ===================

export const WholWrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color};
`;

export const RsWrapper = styled.div`
 width: 1350px;
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 background-color: ${(props) => props.bgColor};
`;

export const Wrapper = styled.div`
 width: ${(props) => props.width || `100%`};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 display: ${(props) => props.display || `flex`};
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};
 color: ${(props) => props.color};
 background-color: ${(props) => props.bgColor};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
 border-radius: ${(props) => props.radius};
 flex-wrap: ${(props) => props.wrap || `wrap`};
 position: ${(props) => (props.isAbsolute ? `absolute` : ``)};
 position: ${(props) => (props.isRelative ? `relative` : ``)};
 position: ${(props) => (props.isFixed ? `fixed` : ``)};
 top: ${(props) => props.top};
 bottom: ${(props) => props.bottom};
 left: ${(props) => props.left};
 right: ${(props) => props.right};
 transition: ${(props) => props.transition};
`;

// =================== Text ====================

export const PText = styled.p`
 width: ${(props) => props.width};
 color: ${(props) => props.color};
 font-size: ${(props) => props.fontSize || `16px`};
 font-weight: ${(props) => props.fontWeight || `500`};

 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};

 text-align: ${(props) => props.al};
`;

export const SpanText = styled.span`
 color: ${(props) => props.color};
 font-size: ${(props) => props.fontSize || `16px`};
 font-weight: ${(props) => props.fontWeight || `500`};

 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
`;

// =================== img ===================

export const Image = styled.img`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 background-color: ${(props) => props.bgColor};
 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
 border-radius: ${(props) => props.radius};
 background-size: cover;
 background-repeat: none;
`;

// ============== title ====================

export const CommonTitle = styled.h1`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 font-size: ${(props) => props.fontSize || `30px`};
 font-weight: ${(props) => props.fontWeight || `600px`};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};

 border: ${(props) => props.border};
 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
`;

// ============= button ===================

export const CommonInput = styled.input`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};

 outline: ${(props) => props.outline || `none`};
 background: ${(props) => props.bg || `none`};
 border: ${(props) => props.border || `none`};
 cursor: pointer;

 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color};

 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
 border-radius: ${(props) => props.radius};
`;

export const CommonButton = styled.button`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};

 outline: ${(props) => props.outline || `none`};
 background: ${(props) => props.bg || `none`};
 border: ${(props) => props.border || `none`};
 cursor: pointer;

 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color};

 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
 border-radius: ${(props) => props.radius};
`;

// =============== file =================

export const FileInput = styled.input`
 display: none;
`;

export const FileLabel = styled.label`
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin: ${(props) => props.margin};
 padding: ${(props) => props.padding};

 font-size: ${(props) => props.fontSize};
 font-weight: ${(props) => props.fontWeight};

 outline: ${(props) => props.outline || `none`};
 background: ${(props) => props.bg || `none`};
 border: ${(props) => props.border || `none`};
 cursor: pointer;

 background-color: ${(props) => props.bgColor};
 color: ${(props) => props.color};

 display: flex;
 flex-direction: ${(props) => props.dr || `column`};
 align-items: ${(props) => props.al || `center`};
 justify-content: ${(props) => props.ju || `center`};

 border-bottom: ${(props) => props.borderBottom};
 border-top: ${(props) => props.borderTop};
 border-left: ${(props) => props.borderLeft};
 border-right: ${(props) => props.borderRight};
 border-radius: ${(props) => props.radius};
`;

// =============== search ===============

export const SearchBox = styled.input`
 outline: none;
 border: ${(props) => props.border || `none`};
 background: ${(props) => props.bg || `none`};
 width: ${(props) => props.width || `300px`};
 height: ${(props) => props.height};
 border-bottom: 2px solid ${Theme.mainThemeColor};
 padding: 1.5px;
 color: ${Theme.whiteColor};

 &:focus {
 }
`;

export const SearchIcon = styled.button`
 outline: none;
 border: ${(props) => props.border || `none`};
 background: ${(props) => props.bg || `none`};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 border-bottom: 2px solid ${Theme.mainThemeColor};
 color: ${Theme.whiteColor};
`;
