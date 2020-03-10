import * as React from 'react';
// @ts-ignore
import {StyledP} from "../atoms/StyledP";
import {StyledColumns} from "../atoms/StyledColumns";

type Props = {
    prediction: string[];
};

const PredictionColumn = (props: Props) => {
    const {prediction} = props;
    return (
        <StyledColumns size={180}>
            {prediction.map(prediction => {
                return (
                    <StyledP>
                        {prediction}
                    </StyledP>
                )
            })}
        </StyledColumns>
    );
};

export default PredictionColumn;
