import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { color } from '@material-ui/system';
export default makeStyles ({

container: {
        padding: '0 5px',
        width:'100%',
        margin:0,
},
card:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'45vh',
        padding:'10%',
        borderRadius:10,
        color:'white'
        
},
infoCard: {
        display:'flex',
        flexDirection:'column',
        textAlign:'center'
        
}

});


