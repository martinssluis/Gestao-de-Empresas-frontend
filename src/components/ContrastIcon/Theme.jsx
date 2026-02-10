import { Button} from '@mui/material';
import { createTheme } from '@mui/material';
import ContrastIcon from '@mui/icons-material/Contrast';

    export const lightTheme = createTheme({
        palette:{
            mode:'light',
        },
    });
    
    export const darkTheme = createTheme({
        palette:{
            mode:'dark',
            background:{
                default:'#121212',
                paper:'#1e1e1e'
            },
        },
    });
    function ChangeTheme({toogleTheme}){
    if (typeof toogleTheme !== 'function'){
        console.error('não foi passado');
        return null;
    }

    return (
        <Button onClick={
            toogleTheme}> 
            <ContrastIcon/>
        </Button>
    );}

    export default ChangeTheme
    // ESTUDAR TOGGLE THEME E COMPONENTES USADOS NESSA PAGE
    // MOVER TEMA PARA FUTURA PÁGINA DE CONFIGURAÇÃO