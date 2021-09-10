import styled from "styled-components";

export const Wrapper = styled.div`
  width: 776px;
  background-color: white;
  height: 450px;
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 20;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
export const H2 = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 75px;
  margin: 0;
`;
export const P = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: #000000;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const Span = styled.span`
  color: #60dabf;
`;

export const WrapperIssue = styled(Wrapper)`
  height: 650px;
`;
export const OneInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 430px 150px;
  justify-items: baseline;
  align-items: center;
  margin-bottom: 30px;
`;
export const Select = styled.select`
  margin: 5px 0;
  background: #ffffff;
  border: 1px solid #2b3a67;
  box-sizing: border-box;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  width: 267px;
  height: 47px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
export const Label = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
export const Error = styled.span`
  justify-self: baseline;
  font-size: 1.5rem;
  color: red;
  align-self: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export const InputsWrapper = styled.div`
  flex-grow: 1;
  margin-top: 60px;
`;
export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 66% auto;
`;
export const InputImage = styled.input`
  margin: 5px 0;
`;
export const ConnectAsObserverAndCancel = styled.div`
  display: grid;
  grid-template-rows: 75px 133px auto;
  align-items: end;
  justify-items: end;
  height: 700px;
  justify-content: space-between;
`;
export const ConnectAsObserver = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 15px;
`;
export const Initials = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 56px;
  display: flex;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  top: -3px;
`;
export const InputsWrapperConnectToLobby = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  height: 700px;
`;
export const OneInputWrapperConnectToLobby = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperConnectToLobby = styled.div`
  width: 776px;
  background-color: white;
  height: 730px;
  border: 1px solid grey;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 20;
  padding: 50px;
`;
type AvatarImg = {
  avatar: string | null;
};
export const Avatar = styled.div<AvatarImg>`
  background-image: url(${(props) =>
    props.avatar === null ? "" : props.avatar});
  background-color: #60dabf;
  width: 76px;
  height: 76px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: inset 0px 4px 4px rgb(0 0 0 / 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
