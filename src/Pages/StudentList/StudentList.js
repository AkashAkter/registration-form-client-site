import React from 'react';
import { useQuery } from 'react-query';

const StudentList = () => {

    const { data: list = {} } = useQuery({
        queryKey: ['registeredStudent'],
        queryFn: () => fetch('http://localhost:5000/registeredStudent')
            .then(res => res.json())
    });

    console.log(list);

    return (
        <div>
            <h1> List of registred students</h1>
            <p>{list.length}</p>
        </div>
    );
};

export default StudentList;