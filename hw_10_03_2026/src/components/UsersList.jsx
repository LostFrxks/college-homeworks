import UserCard from './UserCard';

function UsersList({ users }) {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
