import React, { useState, CSSProperties } from 'react';
import ErrorBoundry from '../pokedexFunctions/errorBoundry';

import character1 from "../../assets/character1.png";
import character2 from "../../assets/character2.png";
import character3 from "../../assets/character3.png";
import catchemall from "../../assets/catchemall.jpg";
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import Button from '@material-ui/core/Button';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Modal from "../modal"
import '../../index.css';

interface Props {

}
 
    export class BtnLayout extends React.Component {
        constructor(props: Props) {
        super(props)
        }
    }


const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });
  
export interface DialogTitleProps extends WithStyles<typeof styles> {
        id: string;
        children: React.ReactNode;
        onClose: () => void;
      }
      
      const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
        const { children, classes, onClose, ...other } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });
      
      const DialogContent = withStyles((theme: Theme) => ({
        root: {
          padding: theme.spacing(2),
        },
      }))(MuiDialogContent);
      
      
      export default function CustomizedDialogs() {
        const [open, setOpen] = React.useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
        const handleClose = () => {
          setOpen(false);
        }
        const [isModalOpen, setIsModalOpen] = React.useState(false);
          const secondModalState = () => {
            setIsModalOpen(true);
          };
      
        

        return (
        
         <div style = { grayBoxDiv }>
           <ErrorBoundry errorMsg="Broken">
            <Button
            onClick={secondModalState}
            startIcon={<PriorityHighIcon/>} style = { grayBoxInput } 
            
            /> 
            </ErrorBoundry>
             {isModalOpen ? (
        <Modal isOpen={isModalOpen}>
          
            <Button  
            onClick={() => setIsModalOpen(false)}
            startIcon={<CloseIcon/>}  
            style = { float }
            />
            <img src={catchemall} 
            style = { imageFit }/>
        </Modal>
      ) : null}

            <Button
            onClick={handleClickOpen}
            startIcon={<OfflineBoltIcon/>} style = { grayBoxInput } 
            
            />     
        
        
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Creators
        </DialogTitle>
        <DialogContent dividers>
        <img src={character1} />
          <Typography gutterBottom>
          Joakim Pfannenstill
          </Typography>
          <img src={character2} />
          <Typography gutterBottom>
            Ossian Gren
          </Typography>
          <img src={character3} />
          <Typography gutterBottom>
            Andreas Palm Österberg
          </Typography>
        </DialogContent>
        
      </Dialog>
    
        </div>
        );
    }


export const grayBoxDiv: CSSProperties = {
    backgroundColor: "#DB0E2D",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "55%",
}

const grayBoxInput: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#58585A",
    paddingRight: "0px",
    width: "4em",
    height: "38px",
    margin: "0 1em",
    border: "1px solid black",
    borderRadius: "8px",
    fontSize: "1.5em"
}

const float: CSSProperties = {
  float: "right"
}

const imageFit: CSSProperties = {
  objectFit: "contain",
  width: "100%",
  height: "auto"
}
