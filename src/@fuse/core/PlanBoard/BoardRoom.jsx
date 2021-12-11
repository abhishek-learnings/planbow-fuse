import React, {useState, useEffect} from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
//import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
//import IdeaboardComponent from './ideaboardComponent'
import IdeaDashBoard from '../IdeaDashBoard'

const elements = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
  // you can also pass a React component as a label
  { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

export default function Boardroom() {
  const [nodeName, setNodeName] = useState("");
  const [open, setOpen] = React.useState(false);
  const openModal =(event, node)=>{
    switch (true) {
      case node.id == "1":
        setNodeName(node.data.label)
        setOpen(true);
        break;
      case node.id == "2":
        setNodeName(node.data.label)
        setOpen(true);
        break;
      default:
        break;
    }
  }

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <ReactFlow style={{width:'1000px', height:'1000px'}} onNodeDoubleClick={(event, node)=>openModal(event, node)}  elements={elements} >
      <Background />
      </ReactFlow>
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={closeModal}
          TransitionComponent={Grow}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={closeModal}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {nodeName}
              </Typography>
              <Button autoFocus color="inherit" onClick={closeModal}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          {/* <IdeaboardComponent /> */}
            <IdeaDashBoard />
        </Dialog>
      </div>
    </div>
  )
}
