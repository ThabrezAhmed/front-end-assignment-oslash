import React from 'react';
import "./SelectedPeople.css"

interface Props {
    personName: string;
    subText: string;
    accessText: string;
    imageUrl: string;
}

export default function SelectedPeople(props: Props) {
    const { personName, subText, accessText, imageUrl } = props;
    return (
        <div className="selected-people-container">
            <div className="selected-people-icon">
                {imageUrl && <img
                    src={imageUrl}
                    className="selected-people-icon"
                    alt="User"
                />}
            </div>
            <div className='person-detail-container'>
                {personName}
                <span>{subText}</span>
            </div>
            <div className='access-container'>
                {accessText}
            </div>
        </div>
    )
}