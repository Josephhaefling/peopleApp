import { getAllUsers } from '../../api';

export const getCurrentUser = async (userName, password) => {
    const users = await getAllUsers()
    return users.find(user => {
        const isUser = user.userName === userName 
        const passwordCorrect = user.password === password
        return isUser && passwordCorrect && user
    })
}
