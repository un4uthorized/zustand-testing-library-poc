import React, { useEffect } from 'react'
import { useList } from '../../../store/List/list';

export const List = () => {
    const { get, list } = useList();

    useEffect(() => {
        get();
    }, [])

    return (
        <> 
        
        { list.length ? <ul>
            {list.map((item: { name: string}) => (
                <li key={item.name}>{item.name}</li>
            ))}
            </ul> : <p>loading...</p> }
        </>
       
    )
}

