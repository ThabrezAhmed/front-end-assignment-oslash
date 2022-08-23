import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { People } from './interfaces'
import "./UserCard.css";


interface Props {
    onClick: (val: People) => void;
    value: People;
}

export default function UserCard(props: Props) {
    const { onClick, value, } = props;
    return (
        <div className="user-card-container" onClick={() => onClick(value)}>
            <div className="user-card-row">
                <div>
                    <img
                        src={value.imageUrl}
                        className="user-image"
                        alt="User"
                    />
                </div>
                <div className="user-name-contianer">
                    <span> {value.name} </span>
                </div>
            </div>
        </div>
    );
}
