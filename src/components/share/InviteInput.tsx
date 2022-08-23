import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SearchModal from './SearchModal'

interface Props {
    onInvite: (val: any) => void;
}

export default function InviteInput(props: Props) {
    const { onInvite } = props;
    const [modalShow, setModalShow] = React.useState(false);

    const handleInvite = (inviteData: any) => {
        console.log('inviteData ', inviteData)
        onInvite(inviteData)
    }

    return (
        <InputGroup className="mb-3">
            <Form.Control
                placeholder="People, email, groups"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onClick={() => setModalShow(true)}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={() => setModalShow(true)}>
                Invite
            </Button>
            <SearchModal show={modalShow}
                onHide={() => setModalShow(false)}
                onInvite={handleInvite}
            />
        </InputGroup>
    )
}