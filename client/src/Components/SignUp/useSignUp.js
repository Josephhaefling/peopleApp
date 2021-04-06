export const isMatchingPassword = (passwordA, passwordB) => {
    if (passwordA === passwordB) {
        const uniquePswd = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
        return passwordA.match(uniquePswd)
    }
}