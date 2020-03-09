import * as React from 'react';
// @ts-ignore
import {StyledColumns} from "../atoms/StyledColumns";
import {StyledP} from "../atoms/StyledP";

type Props = {
    confidence: number[] ;
    style: any;
};

const ConfidenceColumn = (props: Props) => {
    const {confidence} = props;
    return (
        <StyledColumns size={150} style={props.style}>
            {confidence.map(confidence => {
                return (
                    <StyledP>
                        {confidence}%
                    </StyledP>
                )
            })}
        </StyledColumns>
    );
};

export default ConfidenceColumn;
