import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        barSize: 1,
        fontSize: 14 / 16,
        height: 24 / 16,
        iconSize: 16,
        padding: 4,
        paddingStart: 24,
    },
    large: {
        barSize: 2,
        fontSize: 18 / 16,
        height: 36 / 16,
        iconSize: 24,
        padding: 8,
        paddingStart: 36,
    },
};

const STYLES_KEYS = Object.keys(STYLES);

const IconInput = ({ label, icon, width = 250, size, placeholder, ...delegated }) => {
    if (!STYLES_KEYS.includes(size)) {
        throw new Error(`The size must be one of: ${STYLES_KEYS.join(', ')}. Received ${size}.`);
    }

    const styles = STYLES[size];

    return (
        <Wrapper style={{ '--height': `${styles.height}rem`, '--width': `${width}px` }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            <IconWrapper
                style={{
                    '--size': `${styles.iconSize}px`,
                }}
            >
                <Icon id={icon} size={styles.iconSize} />
            </IconWrapper>
            <Input
                {...delegated}
                style={{
                    '--font-size': `${styles.fontSize}rem`,
                    '--padding': `${styles.padding}px`,
                    '--padding-start': `${styles.paddingStart}px`,
                }}
                placeholder={placeholder}
            />
            <DecorativeElement
                style={{
                    '--height': `${styles.barSize}px`,
                }}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    color: ${COLORS.gray700};
    position: relative;
    height: var(--height);
    width: var(--width);

    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.span`
    bottom: 0;
    height: var(--size);
    left: 0;
    margin: auto;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: var(--size);
`;

const Input = styled.input`
    border: none;
    color: inherit;
    font-size: var(--font-size);
    font-weight: 700;
    padding-block-start: var(--padding);
    padding-block-end: var(--padding);
    padding-inline-start: var(--padding-start);
    padding-inline-end: var(--padding);
    width: 100%;

    &:focus {
        outline-offset: 2px;
    }

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }
`;

const DecorativeElement = styled.div`
    background-color: ${COLORS.black};
    bottom: 0;
    border-radius: 50%;
    height: var(--height);
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
`;

export default IconInput;
