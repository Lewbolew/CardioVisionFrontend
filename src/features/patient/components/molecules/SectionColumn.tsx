import * as React from 'react';
// @ts-ignore
import {StyledColumns} from "../atoms/StyledColumns";
import styled from "@emotion/styled";

type Props = {
    section: string[];
    history: any;
};

const SectionColumn = (props: Props) => {
    const {section} = props;
    return (
        <StyledColumn size={150}>
            {section.map(section => {
                return (
                    <StyledButton onClick={() => {
                        // window.location.href='http://157.245.23.187/viz'
                        props.history.push('/patient-chart')
                    }}>
                        {section}
                    </StyledButton>
                )
            })}
        </StyledColumn>
    );
};

const StyledButton = styled.button`
    width: 90%;
    border-radius: 4px;
    background: #AD1F3A;
    color: #fff;
    cursor: pointer;
    padding: 6px 0;
    border: none;
    transition: 0.2s;
    margin-bottom:6px; 
    font-size: 1em;
    &:hover {
        opacity: 0.8;
    }
`;

const StyledColumn = styled(StyledColumns)`
    justify-content: space-between;
    align-items: center;
    padding: 14px 0  7px 0;
    border-left: none;
`;

export default SectionColumn;
