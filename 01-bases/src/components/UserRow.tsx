import type { User } from '../interfaces/reqres.response';

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {
    const avatarSrc = user.avatar.replace('https://reqres.in', '/reqres-img');

    return (
        <tr>
            <td>
                <img
                    src={avatarSrc}
                    className='rounded-full w-14 p-2'
                    alt='User Avatar' />
            </td>
            <td>
                {user.first_name} {user.last_name}
            </td>
            <td>{user.email}</td>
        </tr>
    );
};