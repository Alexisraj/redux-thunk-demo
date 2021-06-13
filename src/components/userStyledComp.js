import styled from "styled-components";

export const userTab = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  font-weight: ${(p) => (p.isActive ? "bold" : "")};
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
`;

export const CSection = styled.div`
  height: 100px;
  width: 100%;
  color: blue;
  border-bottom: 1px solid #ccc;
`;
export const Loader = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10001;
`;
export const Loading = styled.div`
  width: 165px;
  top: 50%;
  left: 50%;
  position: fixed;
`;
export const SubHeader = styled.span`
  font-size: 32px;
  font-family: sans-serif;
`;
