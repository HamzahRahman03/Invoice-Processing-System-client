

import { Table, TableBody, TableCell, TableHead, TableRow, Button, styled, Typography } from "@mui/material";

const StyledTable = styled(Table)`
width : 95%;
margin : 50px auto 50px auto;
`

const TRow = styled(TableRow)`
background : #010138;
& > th {
color : white;
text-align : center;
font-size : 25px
}
`
const TBody = styled(TableRow)`
background : #bcbacf;
& > td {
text-align : center;
font-size : 20px
}
`
const NoData = styled(TableCell)`
background : #a19c9c;
margin : 50px auto auto auto;
font-family : Calibri;
font-style : italic;
text-align : center;
font-size : 50px
`

const AllInvoices = ({ invoices, delInvoice }) => {

    return (

        <StyledTable>
            <TableHead>
                <TRow>

                    <TableCell>Vendor</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TRow>
            </TableHead>
            <TableBody>
                {
                    invoices.length > 0 ?
                    invoices.map(invoice => (
                        <TBody>
                            <TableCell> {invoice.vendor}</TableCell>
                            <TableCell> {invoice.product}</TableCell>
                            <TableCell> {invoice.amount}</TableCell>
                            <TableCell> {invoice.date}</TableCell>
                            <TableCell> {invoice.action}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='success' onClick={() => delInvoice(invoice.id)}> Mark Done</Button>
                            </TableCell>

                        </TBody>
                    ))
                    :
                        <NoData colSpan={6}> --- no pending invoices ---</NoData>
                    
                        
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllInvoices;