import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <PresentationalSelect>
                {displayedValue}
                <IconWrapper style={{ '--size': 24 + 'px' }}>
                    <Icon id='chevron-down' strokeWidth={1} size={24} />
                </IconWrapper>
            </PresentationalSelect>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const NativeSelect = styled.select`
    appearance: none;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

const PresentationalSelect = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    color: ${COLORS.gray700};
    font-size: 1rem;
    padding-block-start: 12px;
    padding-block-end: 12px;
    padding-inline-start: 16px;
    padding-inline-end: 52px;

    ${NativeSelect}:focus + & {
        outline: 1px dotted #212121;
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    bottom: 0;
    height: var(--size);
    margin: auto;
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 0;
    width: var(--size);
`;

export default Select;
