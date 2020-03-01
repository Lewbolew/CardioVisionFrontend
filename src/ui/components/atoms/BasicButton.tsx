import * as React from 'react';
import styled from '@emotion/styled';

type ExpandedOnChangeProps = {
    title?: string;
    name?: string;
    disabled?: boolean;
    onClick: () => void;
};

class BasicButton extends React.Component<ExpandedOnChangeProps> {
    render() {
        return (
            <Button
                onClick={(event) => {
                    this.props.onClick();
                }}
                disabled={this.props.disabled}
                style={{cursor: this.props.disabled? 'not-allowed' : 'pointer'}}
            >{this.props.title}</Button>
        );
    }
}

export default BasicButton;

const Button = styled.button`
  outline: none !important;
  border: none;
  border-radius: 4px;
  width: 100%;
  color: #fff;
  background: #666;
  padding: 12px;
`;
