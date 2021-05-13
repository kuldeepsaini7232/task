import {ADD_ITEM,REMOVE_ITEM,FILTER_ITEM} from './action-type';

export const addItem=item=>({
    type:ADD_ITEM,
    payload:item
})

export const  removeItem=id=>({
    type:REMOVE_ITEM,
    payload:id
})

export const filterItem=id=>({
    type:FILTER_ITEM,
    payload:id
})
