import "dotenv/config";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


async function authVerification(req, res, next) {
    try {
        const secretkey = process.env.SECRET_KEY;
        const { authorization } = req.headers;

        if(!authorization) {
            return res.status(401).send({message: "Usuário não autorizado"});
        }

        const parts = authorization.split(" ");
        const [schema, token] = parts;
    
        if(schema !== "Bearer") {
            return res.status(401).send({message: "Usuário não autorizado"});
        }

        jwt.verify( token, secretkey, async( error, decoded ) => {
            // console.log(decoded)
            if(!decoded) {
                return res.status(401).send({message: "Usuário não autorizado"});
            }
            req.userId = decoded.id;
            const user = await User.findOne({
                where: {
                    id: req.userId,
            },
        });
            return res.status(200).json(user);
            
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default authVerification;