import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try { 
        const token = req.headers.authorition.split(" ")[1]
        const isCustomAuth = token.length < 500

        let decodedData;
        if(toke && usCustomAuth) {
            decodedData = jwt.verify(token, 'test')

            req.userId = decodedDate?.userName
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }
        next() 
    } catch (err) {
        console.log(err)
    }
}

export default auth