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
    /*
    const [dark, setDark] = useState(false);

    const theme = {
        backgroundColor: dark ? "#1A1A1A" : "white",
        color: dark ? "white" : "#1A1A1A"
    }
    // MOVER TEMA PARA FUTURA PÁGINA DE CONFIGURAÇÃO
    return(
    <div style={theme}>
    <Button onClick={() => setDark(prev => !prev)}>
        <ContrastIcon/>
    </Button>
    </div>
    )*/
