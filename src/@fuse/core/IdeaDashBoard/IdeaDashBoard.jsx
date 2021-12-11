import React, { useState, useEffect } from 'react';
import './IdeaDashBoard.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];

function IdeaDashBoard() {

    const [openAddNewModal, setOpenAddNewModal] = React.useState(false);
    const handleOpenAddNewModal = () => setOpenAddNewModal(true);
    const handleCloseAddNewModal = () => setOpenAddNewModal(false);
    const [queryTitle, setQueryTitle] = useState();
    const [queryDescription, setQueryDescription] = useState();

    const handleQueryTitleChange = (e) => {
        setQueryTitle(e);
    }
    const handleQueryDescriptionChange = (e) => {
        setQueryDescription(e);
    }

    const handleAddNewQuery = () => {
        setOpenAddNewModal(false);
    }

    const [activeStep, setActiveStep] = React.useState(0);

// Stepper Functions =================>>

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

// Stepper Function End

    return (
        <div>
            <div className="ac__ideaDashBoard">
                <div className="ac__sideBar">
                    <div className="ac__addNewBtnSection">
                        <Button fullWidth variant="contained" onClick={handleOpenAddNewModal} size="large">Add New</Button>
                    </div>
                    <div className="ac__queryBoxSection">
                        <div className="ac__queryBox">
                            <p className="queryTitle">summer bbq</p>
                            <p className="queryDescription"><span>to Scott, Alex, Jennifer - </span><span>Wish I could come, but I'm out of town this time</span></p>
                        </div>
                    </div>
                </div>
                <div className="ac__mainContent">
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                            optional={
                                index === 2 ? (
                                <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                            >
                            {step.label}
                            </StepLabel>
                            <StepContent>
                            <Typography>{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                </Button>
                                <Button
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    Back
                                </Button>
                                </div>
                            </Box>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </div>
            </div>
            <Dialog
                open={openAddNewModal}
                TransitionComponent={Slide}
                keepMounted
                onClose={handleCloseAddNewModal}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Add New Query"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Query Title</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={queryTitle}
                                onChange={(e) => handleQueryTitleChange(e.target.value)}
                                label="Query Title"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Query Description</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={queryDescription}
                                onChange={(e) => handleQueryDescriptionChange(e.target.value)}
                                label="Query Description"
                            />
                        </FormControl>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddNewModal}>Cancel</Button>
                    <Button onClick={handleAddNewQuery}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default IdeaDashBoard
