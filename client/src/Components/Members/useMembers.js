import Member from '../Member/Member'; 

export const createMembers = (members) => {
    return members.map(member => {
        return (
            <Member key={member._id} member={member} />
        )
    })
}