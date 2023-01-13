import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function AppLogic() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [output, setOutput] = React.useState();
    const [input, setInput] = React.useState();
    function newInput(e) {setInput(e.target.value);}
    function randHash() {
        let hashArray = input.split('#');
        for (let i = 0; i < hashArray.length; i++) {if (hashArray[i] === '') {hashArray.splice(i, 1);}}
        for (let i = hashArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [hashArray[i], hashArray[j]] = [hashArray[j], hashArray[i]];
        }
        for (let i = 0; i < hashArray.length; i++) {hashArray[i] = '#' + hashArray[i];}
        let hashString = hashArray.join(' ');
        setOutput(hashString);
        setOpen(true);
    }
    return (
        <div>
            <h1>hashTagsHere:</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} className="NoDoubtPut">
                    <TextField multiline rows={6} id="outlined-basic" label="UserInput here" variant="outlined" onChange={newInput} />
                    <Item><Button onClick={randHash}>Click to randomize</Button></Item>
                </Stack>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="Modal">{output}</Box>
                </Fade>
            </Modal>
        </div>
    );
}
export default AppLogic;