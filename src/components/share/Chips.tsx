import React from "react";
import { X } from 'react-bootstrap-icons';
import "./Chips.css";

interface Props {
    text: string;
    onClick: () => void;
}

export default function Chips(props: Props) {
    const { text, onClick } = props;
    return (<div className="chips-container">{text}
        <X onClick={() => onClick()} />
    </div>);
}
