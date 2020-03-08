import * as React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {css} from "@emotion/core";
import styled from "@emotion/styled";

type Props = {
    loading: boolean;
};
const override = css`
  display: block;
`;

export const Spinner = (props: Props) => {
    return (
        <Centered>
            <ClipLoader
                css={override}
                size={150}
                color={"#AD1F3A"}
                loading={props.loading}
            />
        </Centered>
    );
};


const Centered = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: absolute;
    top: 2px;
`;
