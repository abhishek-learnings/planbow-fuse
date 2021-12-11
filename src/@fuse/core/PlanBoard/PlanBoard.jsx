import React, { useState, useEffect } from 'react'
import { Box, Modal, Table, TableBody,  TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography, Stack, IconButton, Grid, Button, MenuItem, TextField, Select, FormControl, InputLabel } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Boardroom from './BoardRoom';

function PlanBoard() {
    const createData = (name, components, createdon, author) => {
        return { name, components, createdon, author };
    }
    const rows = [
        createData('AI Retail', '7 Components', 'June 1, 2020, 08:22 AM', 'Alex Michael'),
        createData('Marketing Plan', '5 Components', 'June 1, 2020, 08:22 AM', 'Alex Michael'),
        createData('Sales Plan', '8 Components', 'June 1, 2020, 08:22 AM', 'Alex Michael'),
        createData('AI Retail', '7 Components', 'June 1, 2020, 08:22 AM', 'Alex Michael'),
        createData('Marketing Plan', '5 Components', 'June 1, 2020, 08:22 AM', 'Alex Michael'),
        createData('Sales Plan', '8 Components', 'June 1, 2020, 08:22 AM', 'Alex Michael')
    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 350,
        width: 600,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
    };

    const [select, setSelect] = useState('');
    const [openPlan, setOpenPlan] = useState(false);

    const [isBoard, setIsBoard] = useState(false)
    const handleOpenPlan = () => setOpenPlan(true);
    const handleClosePlan = () => setOpenPlan(false);
    const handleClickPlanModal = () => {
        setIsBoard(true)
    }
    const handleChangePlan = (event) => {
        setSelect(event.target.value);
    };

    return (
        <div>
            {isBoard ? <Boardroom /> : 
            <div><Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography variant="h6">My Planboards</Typography>
                </Grid>
                <Grid item xs={4} my={2} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" onClick={handleOpenPlan}>Create</Button>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Planboard Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Created On</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">{row.name}</TableCell>
                        <TableCell>{row.components}</TableCell>
                        <TableCell>{row.createdon}</TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell align="center">
                            <Stack direction="row" spacing={1} justifyContent="center">
                                <IconButton aria-label="edit">
                                    <EditIcon size="small" />
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteIcon size="small" />
                                </IconButton>
                            </Stack>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Modal */}
            <Modal
                open={openPlan}
                onClose={handleClosePlan}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create New Planboard
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                <TextField fullWidth label={'margin="normal"'} id="margin-normal"
                        margin="normal" label="Planboard Name" />
                    <TextField fullWidth label={'margin="normal"'} id="margin-normal"
                        margin="normal" label="Description" />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={select}
                            label="Graphic Designer"
                            onChange={handleChangePlan}
                        >
                            <MenuItem value={10}>UI/UX Designer</MenuItem>
                            <MenuItem value={20}>UI Development</MenuItem>
                            <MenuItem value={30}>java Developer</MenuItem>
                            <MenuItem value={30}>Python Developer</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField fullWidth label={'margin="normal"'} id="margin-normal"
                    margin="normal" label="End Date" />
                    <Button size="large" variant="contained"  onClick={handleClickPlanModal} startIcon={<SaveIcon />}>
                        Start Planing
                    </Button>
                </Box>
            </Modal></div>}
        </div>
    )
}

export default PlanBoard
