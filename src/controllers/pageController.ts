import {Request, Response} from 'express'
import { createMenuObject } from '../helpers/createMenuObjects'
import { Pets } from '../models/Pet'


export const home = (req:Request, res:Response) =>{
    let list = Pets.getAll()
    res.render('pages/pages',{
        menu: createMenuObject('all'),
        banner:{
            title: 'Todos os Animais',
            background: 'allanimals.jpg'
        },
        list
    })
}

export const dogs = (req:Request, res:Response) =>{
    let list = Pets.getFromType('dog')
    res.render('pages/pages',{
        menu: createMenuObject('dog'),
        banner:{
            title: 'Todos os Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
}

export const cats = (req:Request, res:Response) =>{
    let list = Pets.getFromType('cat')
    res.render('pages/pages',{
        menu: createMenuObject('cat'),
        banner:{
            title: 'Todos os Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
}

export const fishes = (req:Request, res:Response) =>{
    let list = Pets.getFromType('fish')
    res.render('pages/pages',{
        menu: createMenuObject('fish'),
        banner:{
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
}

