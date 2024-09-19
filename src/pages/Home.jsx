import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import AddInvoice from '../components/AddInvoice';
import AllInvoices from '../components/AllInvoices';

import { Box, Button, Typography, styled } from '@mui/material';

import { getAllInvoices, deleteInvoice } from '../service/api';

const StyledBody = styled(Box)`
text-align : center;
`

const Home = () => {

    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);

    const getInvoices = async() =>{
        const response = await getAllInvoices();
        setInvoices(response.data);
    }
    
    useEffect( () =>{
        getInvoices();
    }, [addInvoice])


    const createInvoice = () =>{
        setAddInvoice(true);
    }


    const delInvoice = async(id) => {
        await deleteInvoice(id);

        const UpdatedInvoices = invoices.filter( invoice => invoice.id != id);
        setInvoices(UpdatedInvoices);
    }

    return (
        <div>
            <Header />

            <StyledBody style={{margin:10}}>
                <Typography variant='h2' style={{margin:50}}>PENDING INVOICES</Typography>
                {!addInvoice && <Button variant='contained'  style={{margin:15}} onClick={() => createInvoice()}>Add Invoice</Button>}
                {addInvoice && <AddInvoice setAddInvoice= {setAddInvoice} />}
                <Box>
                    <AllInvoices 
                    invoices = {invoices}
                    delInvoice = {delInvoice}
                    />
                </Box>
            </StyledBody>

        </div>
    )
}

export default Home;