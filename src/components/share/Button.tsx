import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Globe } from 'react-bootstrap-icons';

// import ShareDialogue from './ShareDialogue';
import InviteInput from './InviteInput';
import SelectedPeople from './SelectedPeople';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Button.css"

interface Props {
    text: string;
}

const initialData = [
    {
        id: 999,
        name: "Everyone at Oslash",
        description: "25 people",
        email: "everyone@oslash.com",
        imageUrl: "",
        isGroup: false,
        access: "No access"
    }
]


export default function ShareButton(props: Props) {
    const { text } = props;
    const [invitedUser, setInvitedUser] = React.useState(initialData)


    const handleInvite = (inviteData: any) => {
        console.log('handleInviteData ', inviteData)
        const tempInviteUser = [...invitedUser];
        tempInviteUser.push(inviteData)
        setInvitedUser(tempInviteUser)
    }
    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={
            <Popover id="popover-basic" className="popover-container">
                <Popover.Header as="h3" className="popover-head">
                    <div className="dialogue-header">
                        {/* <div className='circle' /> */}
                        <Globe className='globe' />
                        <div className="title-container">
                            <p className="popover-h1">Share to Web</p>
                            <p className="dialouge-subtitle">Publish and share the link to anyone</p>
                        </div>
                    </div>

                </Popover.Header>
                <Popover.Body>
                    <InviteInput onInvite={handleInvite} />
                    {invitedUser.length > 0 &&
                        invitedUser.map(val => {
                            return (
                                <SelectedPeople key={val.id} personName={val.name} imageUrl={val.imageUrl}
                                    subText={val.description} accessText={val.access} />
                            )
                        })}
                </Popover.Body>
                <Footer />
            </Popover>
        }>
            <Button variant="dark">{text}</Button>
        </OverlayTrigger>
    )
}