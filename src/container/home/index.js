import React, {useEffect} from 'react';
import UserList from "../../component/userList";
import UserFilter from '../../component/userFilter';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers, getUserById} from "../../redux/actions/users";

const Home = () => {

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const filteredUser = auth.filteredUser;
    const allUser = auth.allUser;

    //***when mount component load all users***
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])

    //***for change select box, show specific user in table***
    const handleChange = (e) => {
        const value = e.target.value;
        if (value) {
            dispatch(getUserById(value));
        } else {
            dispatch(getAllUsers());
        }
    };

    return (
        <>
            <UserFilter allUser={allUser} handleChange={handleChange}/>
            <UserList filteredUser={filteredUser}/>
        </>
    );
};

export default Home;