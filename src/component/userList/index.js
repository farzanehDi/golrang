import Styles from './userList.module.css';

const UserList = ({filteredUser}) => (

    <table className={Styles.table}>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {
            filteredUser.map((user, index) => (
                <tr key={`allUser${index}-${user.id}`}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))
        }
        </tbody>
    </table>

);

export default UserList;