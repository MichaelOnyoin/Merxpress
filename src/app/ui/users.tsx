'use client'
import { use } from 'react';
import React from 'react';
//import Image from 'next/image';

export default function Users({
    users,
    }: {
    users: Promise<{ id: string; name: string; email: string; }[]>
    }) {
    const allUsers = use(users)
    
    return (
        <div className='flex flex-col grid grid-cols-3 gap-4'>
        
        {allUsers.map((user) => (
            <ul key={user.id}>
            
            <li >{user.name}</li>
            <li>{user.email}</li>
            <li><p>{user.id}</p></li>
            </ul>
    
        ))}
        
     </div>
    )
    }
// Compare this snippet from src/app/ui/users.tsx: