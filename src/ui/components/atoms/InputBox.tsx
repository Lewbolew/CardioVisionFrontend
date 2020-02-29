import * as React from 'react';
import styled from '@emotion/styled';

type ExpandedOnChangeProps = {
    placeholder?: string;
    value?: string;
    name?: string;
    readOnly?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
};

class InputBox extends React.Component<ExpandedOnChangeProps> {
    render() {
        return (
            <Input
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}
                onClick={(event) => {
                    event.preventDefault();
                }}
                name={this.props.name}
                readOnly={this.props.readOnly}
            />
        );
    }
}

export default InputBox;

const Input = styled.input`
  outline: none !important;
  border: none;
  width: 100%;
  color: #333;
  padding: 12px 6px;
  font-size: 1.1em;
  background-color: #f4f4f4;
  font-weight: 300;
  &::-webkit-input-placeholder {
    font-size: 1.1em;
    color: #707070;
  }
`;
