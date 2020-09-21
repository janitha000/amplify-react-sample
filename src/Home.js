import React, { useEffect, useState } from 'react';
import './Home.css';

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createActor } from './graphql/mutations'
import { listActors } from './graphql/queries'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Home = () => {
    const [actors, setActors] = useState([])
    const [formState, setFormState] = useState({ firstName: '', lastName: '', age: 0, movies: '' })


    useEffect(() => {
        fetchActors()

    }, [])

    const fetchActors = async () => {
        try {
            const actorData = await API.graphql(graphqlOperation(listActors))
            const actors = actorData.data.listActors.items
            setActors(actors)
        } catch (err) { console.log('error fetching actors') }
    }

    const setInput = (key, value, isNumber = false) => {
        value = (isNumber) ? parseInt(value) : value;
        setFormState({ ...formState, [key]: value })
    }

    const addActor = async () => {
        try {
            if (!formState.firstName || !formState.lastName) return
            const actor = { ...formState }
            setActors([...actors, actor])
            setFormState({ firstName: '', lastName: '', age: 0, movies: '' })
            await API.graphql(graphqlOperation(createActor, { input: actor }))
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const getActors = () => {
        return (
            [{
                firstName: 'Leonardo ',
                lastName: "DiCaprio",
                movies: 'Titanic, Inception, The Wolf of Wall Street',
                age: 45,
            },
            {
                firstName: 'Rachel',
                lastName: "McAdams",
                movies: "Notebook, Time Traveller's wife",
                age: 41,
            },
            {
                firstName: 'Brad',
                lastName: "Pitt",
                movies: "Seven Years in Tibet, World War Z",
                age: 56,
            }]
        )
    }

    return (
        <div className="home">
            <div className="home__table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell >FirstName</TableCell>
                                <TableCell >Last Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                                <TableCell align="center">Movies</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {actors.map((row) => (
                                <TableRow key={row?.name}>
                                    <TableCell component="th" scope="row">
                                        {row?.firstName}
                                    </TableCell>
                                    <TableCell >{row?.lastName}</TableCell>
                                    <TableCell align="right">{row?.age}</TableCell>
                                    <TableCell >{row?.movies}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="app__input">
                <input
                    onChange={event => setInput('firstName', event.target.value)}
                    value={formState.firstName}
                    placeholder="First Name"
                />
                <input
                    onChange={event => setInput('lastName', event.target.value)}
                    value={formState.lastName}
                    placeholder="Last Name"
                />
                <input
                    onChange={event => setInput('age', event.target.value, true)}
                    value={formState.age}
                    placeholder="Age"
                />
                <input
                    onChange={event => setInput('movies', event.target.value)}
                    value={formState.movies}
                    placeholder="Movies"
                />
                <button onClick={addActor}>Create Todo</button>
            </div>
        </div>
    );
}

export default Home;


