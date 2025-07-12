import User from "../models/User.js";
import bcrypt from "bcrypt";
import generateToken from "../services/generateToken.js";


async function signin(req, res) {
    try {

        let { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send({
                message: "Username and password are required"
            });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).send({
                message: "Username already exists"
            });
        }

        // Hash the password before saving
        password = await bcrypt.hash(password, 10);
        
        const user = await User.create({ username, password });

        res.status(201).send({
            message: "User created successfully",
            user
        });

    } catch (error) {
        res.status(500).send(error); 
    }

}

async function login(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send({
                message: "Username and password are required"
            });
        }

        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Invalid password"
            });
        }

        
        const token = generateToken(user.id);

        res.status(200).send({
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).send(error);
    }
}
export default {
    signin,
    login
};