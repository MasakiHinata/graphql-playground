import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {useAddUserMutation, useUserQuery} from "./generated/graphql";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const App = () => {
    const {data, error, refetch} = useUserQuery()
    const [addUser, {}] = useAddUserMutation()
    const [name, setName] = useState<string>();
    const [age, setAge] = useState<number>()

    useEffect(() => {
        console.log(data?.users)
    }, [data?.users])

    const onSubmitHandler = async () => {
        if(!name || !age) return;
        const id = Math.random().toString();
        await addUser({variables: {id, name, age}})
        await refetch();
    }

    return (<>
        <form onSubmit={() => onSubmitHandler()}>
            <input title={'Name'} placeholder={'Name'} onInput={(e) => setName(e.currentTarget.value)}/>
            <input title={'Age'} placeholder={'Age'} type={'number'} onInput={(e) => setAge(parseInt(e.currentTarget.value))}/>
            <button type={"submit"}>Add User</button>
        </form>
        {error && <div>Error {error.message}</div>}
        { data?.users && data.users.map((user, index) => {
            return <div key={index}>
                name: {user?.name} age: {user?.age}
            </div>
        })}
    </>)
}

const client = new ApolloClient({
    uri: 'http://localhost:8080/query',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
