import React from 'react';
import { QuestionCircle, Link45deg } from 'react-bootstrap-icons';
import "./Footer.css"

interface Props {
    copyLinkEnabled: boolean
}

export default function Footer(props: Props) {
    const { copyLinkEnabled = true } = props;
    return (
        <div className="footer-container">
            <div className="footer-common-container">
                <QuestionCircle /> <span>learn about sharing</span>
            </div>
            {copyLinkEnabled && <div className="footer-common-container footer-right-contianer">
                <Link45deg /> <span>Copy link</span>
            </div>}
        </div>
    )
}