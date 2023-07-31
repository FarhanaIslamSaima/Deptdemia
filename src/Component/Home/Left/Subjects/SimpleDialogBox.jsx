import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];


const SimpleDialogBox = (props) => {
    const { onClose, selectedValue, open ,resume} = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
    return (
        <Dialog onClose={handleClose} open={open} 
        
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                height:'100%',
                maxWidth: "1500px",
                  // Set your width here
              },
            },
          }}
      
        
        >
        {
            resume!==null&&(
                <embed type='application/pdf' src={`${resume}#page=1&zoom=100`} width={100+'%'} height={100+'%'}/>
            )
        }
        
      </Dialog>
    );
};

export default SimpleDialogBox;