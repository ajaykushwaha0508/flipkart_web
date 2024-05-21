import {Typography , Box  , Menu , MenuItem, styled} from '@mui/material'; 
import { useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
     margin-top : 10px
`

const Logout = styled(Typography)`
  margin-left : 10px;
  font-size : 14px;
` 

const Profile = ({account , setAccount})=>{

      const [open , setOpen] = useState(false);      
      const handlClick=(event)=>{
        setOpen(event.currentTarget);
      }

      const handleClose=()=>{
        setOpen(false);
      }

      const logoutuser =()=>{
            setAccount('');
      }

       return(

        <>
          <Box onClick={handlClick}><Typography style={{marginTop : 2 , cursor : "pointer" }}>{account}</Typography></Box> 
          <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                >
                <MenuItem onClick={()=> {handleClose() ; logoutuser()}}>
                 
                 <PowerSettingsNewIcon color="primary" fontSize="small"/>
                 <Logout>Logout</Logout>   
                    
                </MenuItem>
          </Component>

        </>

       )
}

export default Profile;