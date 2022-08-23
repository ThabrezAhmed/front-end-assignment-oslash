import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import UserCard from "./UserCard";
import Chips from "./Chips";
import Footer from "./Footer";
import { peopleData } from "./data";
import { People } from './interfaces'
import "./SearchModal.css";

interface Props {
    show: boolean;
    onHide: () => void;
    onInvite: (val: any) => void
}

const accessObj: any = {
    'fullAccess': 'Full Access',
    'canView': 'Can View',
    'canEdit': 'Can Edit',
    'noAccess': 'No access'
}

export default function SearchModal(props: Props) {
    const { onInvite, onHide } = props;
    const [peopleAndGroup, setPeopleAndGroup] = useState<People[]>(peopleData);
    const [people, setPeople] = useState<People[]>([]);
    const [group, setGroup] = useState<People[]>([]);
    const [selectedUser, setSelectedUser] = useState<People[]>([]);
    const [access, setAccess] = useState('noAccess')

    const init = (pg: People[]) => {
        const tempPeople = pg.filter((val) => val.isGroup === false);
        const tempGroup = pg.filter((val) => val.isGroup === true);
        setPeople(tempPeople);
        setGroup(tempGroup);
    }

    useEffect(() => {
        init(peopleAndGroup);
    }, [peopleAndGroup]);

    const handleSearchChange = (e: any) => {
        if (e.target.value === "") {
            setPeopleAndGroup(peopleData);
        } else {
            console.log(e.target.value);
            const tempPeopleAndGroup = peopleAndGroup.filter((val) =>
                val.name.includes(e.target.value)
            );
            setPeopleAndGroup(tempPeopleAndGroup);
        }
    };

    const handleSelectChange = (e: any) => {
        console.log('e', e.target.value)
        setAccess(e.target.value)
    }

    const handleUserClick = (user: People) => {
        let selectedPeopleArr = [...selectedUser];
        selectedPeopleArr.push(user);
        setSelectedUser(selectedPeopleArr)
        const tempPeopleAndGroup = peopleAndGroup.filter((val) =>
            val.name.toLowerCase().includes(user.name.toLowerCase())
        );
        setPeopleAndGroup(tempPeopleAndGroup);
        console.log(user)
    }

    const chipsCloseClick = () => {
        init(peopleData);
        setSelectedUser([])
        setPeopleAndGroup(peopleData)
    }

    const handleInvite = () => {
        let selectedUsr = selectedUser[0];
        selectedUsr.access = accessObj[access]
        onInvite(selectedUsr)
        onHide()
    }

    console.log('peopleAndGroup ', peopleAndGroup)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="modal-body">

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <div className="search-left-cotainer">
                            <div className="chip-container">
                                {selectedUser.length > 0 &&
                                    selectedUser.map(val => { return (<Chips text={val.name} onClick={chipsCloseClick} />) })}
                                {
                                    selectedUser.length === 0 &&
                                    <Form.Control
                                        // style={{ backgroundColor: "transparent", border: "unset" }}
                                        className="search-input-style"
                                        type="email"
                                        placeholder="Search email, names or groups"
                                        // value={searchKey}
                                        onChange={handleSearchChange}
                                    />
                                }
                            </div>
                            <div className="search-middle-container">
                                <div className="center">
                                    <Form.Select onChange={handleSelectChange} value={access}>
                                        <option value='fullAccess'>Full Access</option>
                                        <option value='canView'>Can View</option>
                                        <option value='canEdit'>Can Edit</option>
                                        <option value='noAccess'>No access</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div>
                                <Button variant="light" onClick={handleInvite}>Invite</Button>
                            </div>
                        </div>
                        <div>
                            {people.length > 0 && (
                                <>
                                    <span className="people-container">People</span>
                                    {people.map((val) => (
                                        <UserCard key={val.id} value={val} onClick={(val) => handleUserClick(val)} />
                                    ))}
                                </>
                            )}

                            {group.length > 0 && (
                                <>
                                    <span className="people-container">Group</span>
                                    {group.map((val) => (
                                        <UserCard key={val.id} value={val} onClick={(val) => handleUserClick(val)} />
                                    ))}
                                </>
                            )}
                        </div>
                    </Form.Group>
                </Form>
                <Footer copyLinkEnabled={false} />
            </Modal.Body>
        </Modal>
    );
}