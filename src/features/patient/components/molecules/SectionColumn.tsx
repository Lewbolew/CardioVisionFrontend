import * as React from 'react';
// @ts-ignore
import {StyledColumns} from "../atoms/StyledColumns";
import styled from "@emotion/styled";

type Props = {
    section: string[];
};

const SectionColumn = (props: Props) => {
    const {section} = props;
    return (
        <StyledColumn size={150}>
            {section.map(section => {
                return (
                    <StyledButton>
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
    transition: 0.1s;
    &:hover {
        opacity: 0.8;
    }
`;

const StyledColumn = styled(StyledColumns)`
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-left: none;
`;

export default SectionColumn;
