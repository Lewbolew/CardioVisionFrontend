import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
type Props = {
    text?: string;
    style?: any;
};

const WarningMessage = (props: Props) => {
    return (
        <P style={props.style}>
            {props.text}
        </P>
    );
}

const P = styled.p`
    color: red;
    margin: 0;
`;

export default WarningMessage;
