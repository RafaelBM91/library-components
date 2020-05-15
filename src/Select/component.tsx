import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SelectComp = styled.select`
    margin: 0;
    padding: 5px;
    color: black;
    border: 1px solid gray;
    background-color: white;
    font-size: 14px;
    outline: none;
`;

interface Props {
    options: Array<{
        label: string;
        value: string;
    }>;
    selected: Function;
    value?: string;
}

type EvtChange = React.ChangeEvent<HTMLSelectElement>;

export const Select: React.FunctionComponent<Props> = (props) => {
    return (<SelectComp value={props.value} onChange={(e: EvtChange) => props.selected(e.target.value)}>
        {
            props.options.map((option, key) =>
                <option key={key} value={option.value}>
                    {option.label}
                </option>
            )
        }
    </SelectComp>);
};

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    selected: PropTypes.func.isRequired,
    value: PropTypes.string,
};
