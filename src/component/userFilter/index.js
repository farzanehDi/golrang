import Styles from './userFilter.module.css';

const UserFilter = ({allUser, handleChange}) => (

    <select className={Styles.select} onChange={handleChange}>
        <option value={''}>all users...</option>
        {
            allUser.map((user, index) => (
                <option key={`showUser${index}`} value={user.id}>
                    {user.name}
                </option>
            ))
        }
    </select>

);

export default UserFilter;