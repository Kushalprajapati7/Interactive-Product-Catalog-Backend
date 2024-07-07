import { NextFunction, Request, Response } from "express";
import { JwtUtills } from "../utils/jwtUtils";
import CustomRequest from "../types/customRequest";
import User from "../models/userModel";


async function verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {

    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        res.status(404).json({ error: "Token Not Found!" });
        return
    }
    try {
        const decoded = JwtUtills.verifyToken(token) as { userId: string, role: string };
        (req as CustomRequest).userId = decoded.userId;
        (req as CustomRequest).role = decoded.role;
        // console.log(decoded,"d");

        next();
    } catch (error) {
        res.status(500).json({ error: "Token Has been Expired !" });
    }
}

export default verifyToken