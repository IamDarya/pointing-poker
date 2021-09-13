import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { PopUpCreateIssue } from "../PopUps/PopUpCreateIssue";
import { Wrapper, IssueName, SVGPlus } from "./CreateIssueAndIssue.style";

export const CreateIssue = (): JSX.Element => {
  return (
    <Wrapper>
      <IssueName>Create new Issue</IssueName>
      <Popup trigger={<SVGPlus />} modal nested>
        {(close: () => void) => <PopUpCreateIssue close={close} />}
      </Popup>
    </Wrapper>
  );
};