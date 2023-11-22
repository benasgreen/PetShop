import {Request, Response} from 'express'
import { Pets } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObjects'

export const search = (req:Request, res:Response) =>{
    res.render('pages/pages', {
        
    })
}
