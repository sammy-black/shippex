import styled from "styled-components/native";
import { Colors } from "./constants/Colors";

const { primary } = Colors;

interface SpacerProps {
  size?: string | number;
}

interface StackContainerProps {
  direction?: string;
  spacing?: string | number;
}

export const InnerContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  direction: column;
`;

export const Spacer = styled.View<SpacerProps>`
  height: ${(props) => (props.size ? props.size + "px" : "auto")};
  width: ${(props) => (props.size ? props.size + "px" : "auto")};
`;

export const StackContainer = styled.View<StackContainerProps>`
  flex-direction: ${(props) => props.direction || "row"};
  gap: ${(props) => props.spacing || "0"}px;
`;
