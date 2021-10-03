/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const WRAPPER_STYLES = {
    small: {
        '--border-radius': '4px',
        '--height': '8px',
    },
    medium: {
        '--border-radius': '4px',
        '--height': '12px',
    },
    large: {
        '--border-radius': '8px',
        '--height': '24px',
        '--padding': '4px',
    },
};
const STYLES_KEYS = Object.keys(WRAPPER_STYLES);

const ProgressBar = ({ value, size }) => {
    if (!STYLES_KEYS.includes(size)) {
        throw new Error(`The size must be one of: ${STYLES_KEYS.join(', ')}. Received ${size}.`);
    }
    if (value < 0 || value > 100) {
        throw new Error(`The value must be between 0 and 100. Received: ${value}`);
    }

    const style = WRAPPER_STYLES[size];

    return (
        <Wrapper role='progressbar' aria-valuenow={value} aria-valuemin='0' aria-valuemax='100' style={style}>
            <VisuallyHidden>{value}%</VisuallyHidden>
            <InnerWrapper>
                <InnerBar
                    style={{
                        '--width': `${value}%`,
                    }}
                ></InnerBar>
            </InnerWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--border-radius);
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    height: var(--height);
    padding: var(--padding);
`;

const InnerWrapper = styled.div`
    border-radius: 4px;
    height: 100%;
    overflow: hidden;
    width: 100%;
`;

const InnerBar = styled.div`
    background-color: ${COLORS.primary};
    height: 100%;
    width: var(--width);
`;

export default ProgressBar;
