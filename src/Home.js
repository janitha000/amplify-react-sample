import React, { useEffect, useState } from 'react';
import './Home.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Home() {
    const [actors, setActors] = useState([])


    useEffect(() => {
        setActors(getActors())
    })

    const getActors = () => {
        return (
            [{
                firstName: 'Leonardo ',
                lastName: "DiCaprio",
                age: 45,
            },
            {
                firstName: 'Rachel',
                lastName: "McAdams",
                age: 41,
            },
            {
                firstName: 'Brad',
                lastName: "Pitt",
                age: 56,
            }]
        )
    }

    const setInput = () => {

    }




    return (
        <div className="app">
            <div className="app__table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>FirstName</TableCell>
                                <TableCell >Last Name</TableCell>
                                <TableCell align="right">Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {actors.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell >{row.lastName}</TableCell>
                                    <TableCell align="right">{row.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="app__input">

            </div>
        </div>
    );
}

export default Home;


