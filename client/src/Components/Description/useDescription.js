import { fetchDescription } from '../../api';

export const getDescription = async () => {
    const description = await fetchDescription()
    return description.data.content
}