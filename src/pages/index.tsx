import { GetServerSideProps } from 'next';
import { useState } from 'react'
import { getName } from './api/name';
import { getAge } from './api/age';

type name = string;
type age = number;

export default function Index(props: any) {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <div>Your name: {name}</div>
            <div>Your age: {age}</div>
            <button onClick={(e) => {
                e.preventDefault();
                setName(props.name);
            }}>Get Name</button>
            <button onClick={(e) => {
                e.preventDefault();
                setAge(props.age)
            }}>Get Age</button>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{
    name: name, age: age
}> = async (context) => {
    var namedata = await getName();
    var agedata = await getAge();
    return {
        props: {
            name: namedata,
            age: agedata
        }
    }
};