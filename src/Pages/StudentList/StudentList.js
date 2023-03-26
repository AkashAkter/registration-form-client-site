import React from 'react';
import { useQuery } from 'react-query';

const StudentList = () => {

    const { data: list = {} } = useQuery({
        queryKey: ['registeredStudent'],
        queryFn: () => fetch('https://alumni-registration-page-server.vercel.app/registeredStudent')
            .then(res => res.json())
    });

    // console.log(list);

    return (
        <div className='my-10'>
            <h1 className='text-3xl text-center font-black'> List of registered students</h1>
            {/* <p>{list.length}</p> */}

            <div className='my-4'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Batch</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(list) && list.map((student, i) => <tr className='border' key={i}>
                                <th>{i + 1}</th>
                                <td>{student?.Name}</td>
                                <td>{student?.Department}</td>
                                <td>{student?.Batch}</td>

                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default StudentList;