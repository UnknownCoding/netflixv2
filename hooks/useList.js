import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

const useList = (uid) => {
    const [list ,setList]= useState([])
    useEffect(()=>{
        if(!uid) return
        return onSnapshot(collection(db,"customers",uid,"myList"),(snapshot)=>{
            setList(snapshot?.docs?.map((docs)=>({
                id:docs?.id,
                ...docs?.data()
                
            })))
        })
    },[db,uid])

    return list
}

export default useList