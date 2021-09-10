import React from "react";
import { Avatar, Initials } from "../PopUps/PopUps.styled";
import {
  Button,
  Name,
  NameAndPosition,
  SmallTxt,
  Wrapper,
} from "./UserAvatar.styled";
import User from "../../models/User";

export const UserAvatar = (props: User): JSX.Element => {
  return (
    <>
      <Avatar avatar={props.image}>
        {props.firstName !== "" && props.image === null && (
          <Initials>{props.firstName[0]}</Initials>
        )}
        {props.lastName !== "" && props.image === null && (
          <Initials>{props.lastName[0]}</Initials>
        )}
      </Avatar>
      <NameAndPosition>
        {props.currentUser && <SmallTxt>It&apos;s you!</SmallTxt>}
        <Name>{props.firstName + " " + props.lastName}</Name>
        {props.position !== "" && <SmallTxt>{props.position}</SmallTxt>}
      </NameAndPosition>
      {props.ableToDelete && (
        <Button>
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 65.518 65.518"
            xmlSpace="preserve"
          >
            <g>
              <path
                fill="grey"
                d="M32.759,0C14.696,0,0,14.695,0,32.759s14.695,32.759,32.759,32.759s32.759-14.695,32.759-32.759S50.822,0,32.759,0z
       M6,32.759C6,18.004,18.004,6,32.759,6c6.648,0,12.734,2.443,17.419,6.472L12.472,50.178C8.443,45.493,6,39.407,6,32.759z
       M32.759,59.518c-5.948,0-11.447-1.953-15.895-5.248l37.405-37.405c3.295,4.448,5.248,9.947,5.248,15.895
      C59.518,47.514,47.514,59.518,32.759,59.518z"
              />
            </g>
          </svg>
        </Button>
      )}
    </>
  );
};
