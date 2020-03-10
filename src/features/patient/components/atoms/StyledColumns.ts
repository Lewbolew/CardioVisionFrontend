import styled from "@emotion/styled";

type Props = {
    size: number,
}

export const StyledColumns = styled.div`
    display:flex;
    flex-direction: column;
    width: ${(p:Props) => p.size+"px"};
    border-left: 1px solid #666;
    box-sizing: border-box;
`;
