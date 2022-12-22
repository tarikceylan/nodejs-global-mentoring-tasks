import {Request, Response} from 'express';
import {mockData} from '../../data/mockData';
import {User} from '../../models/UserModel'
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';


export const getUserById = (req: Request, res: Response) => {
    const userID = req.params.id;
    const foundUser = mockData.find((user) => user.id === userID);
    res.json({user: foundUser})
}

export const createUser = async (req: Request, res: Response) => { 

    const {login, password, age}: User = req.body;

    // Check Duplicate login
    const userExist = mockData.find(user => user.login === login)

    if (!userExist) {
        try {
            // Hash User Password
            const hashedPwd:string = await bcrypt.hash(password, 10);

            // Create new UUID
            const uuid: string = uuidv4();

            // Push User
            mockData.push({id: uuid, login: login, password: hashedPwd, age: age, isDeleted: false });
        
            res.status(201).json({message: `User: ${login} created`})
        } catch (err: any) {
            res.status(400).json({Error: `${err.message}`})
        }
       
    } else {
        res.status(409).json({message: `User Exist`});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const userID: string = req.params.id
    const {login, password, age} = req.body

    const foundUser = mockData.find(user => user.id === userID)

    if(foundUser) {
        try {
            foundUser.login = login;
            foundUser.password = await bcrypt.hash(password, 10);
            foundUser.age = age;
        } catch (err: any) {
            res.status(400).json({Error: `${err.message}`})
        }} else {
        res.status(400).json({Error: `User ${login} not found`})
    } 
}

export const removeUser = async (req: Request, res: Response) => {
    const userID: string = req.params.id
    const foundUser = mockData.find(user => user.id === userID)
    if(foundUser) {
        foundUser.isDeleted = true
        res.status(200).json({message: `User ${foundUser.login} soft-deleted.`})
        console.log(mockData)
    } else {
        res.status(400).json({message:  `User Not Found`});
    }
}

export const getAutoSuggestUsers = (req: Request, res: Response) => {
    const {limit, subStr} = req.params;
        
    const compareFn = (a: User,b: User) => {
        if(a.login < b.login) {
            return -1
        } 
        if(a.login > b.login) {
           return 1;
        }
           return 0;
    }
    
    // Shallow Copy mockData
    const sortedData = [...mockData].sort(compareFn)
    const result = sortedData.filter(element => 
        element.login.includes(subStr)
    ).slice(0, parseInt(limit));

    if(result) {
        res.status(200).json({userList: result})
    } else {
        res.status(400).json({error: `Something went wrong`});
    }
}