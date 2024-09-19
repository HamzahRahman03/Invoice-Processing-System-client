import { FormControl, TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../service/api";

const defaultObj = {
    vendor : '',
    product : '',
    amount: 0,
    date: '',
    action: 'pending'
}


const AddInvoice = ( {setAddInvoice}) => {
    
    const[invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) =>{
        setInvoice({...invoice, [e.target.name] : e.target.value})
    }
    
    const addNewInvoice = async() => {
        console.log(invoice, "addNewInvoice called");
        
        await saveInvoice({...invoice, amount: Number(invoice ['amount']) });

        setAddInvoice (false);
    }

    return (

            <Box sx = {{textAlign: 'center', fontSize: 30, fontWeight:'bold'}} style={{marginLeft:5, marginTop : 30}}> Add Invoice Here :
            <Box style={{marginTop:10}}>

                <TextField 
                style={{marginLeft:30, width:300}} 
                placeholder="enter vendor name" 
                onChange={ (e) => onValueChange(e)} 
                name="vendor" 
                autoComplete="off"
                />
                
                <TextField 
                style={{marginLeft:30, width:300}} 
                onChange={(e) => onValueChange(e)}
                name="product"
                placeholder="enter product name" 
                autoComplete="off"
                />

                <TextField 
                style={{marginLeft:30, width:300}} 
                onChange={ (e) => onValueChange(e)}
                name="amount" 
                placeholder="enter amount (in Rs)" 
                type='number'
                autoComplete="off"
                />

                <TextField 
                style={{marginLeft:30, width:300}} 
                onChange={ (e) => onValueChange(e)}
                name = "date" 
                placeholder="enter date" 
                type='date'
                autoComplete="off"
                />


                <Button 
                variant="contained" 
                style={{marginLeft:30, marginTop:8, width:300}} 
                onClick={() =>addNewInvoice()} >
                    Add invoice</Button>
            </Box>
            </Box>
    )
}

export default AddInvoice;