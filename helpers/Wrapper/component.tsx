import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: ${(props: { margin?: string }) => props.margin || "50px 50px 50px 50px" };
`;

export const WrapperComponent: React.FunctionComponent<{}> = (props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
);
