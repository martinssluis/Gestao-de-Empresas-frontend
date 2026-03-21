import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Groups2Icon from '@mui/icons-material/Groups2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const icons ={
    addIcon: AddIcon,
    peopleIcon: PeopleIcon,
    monetizationOnIcon: MonetizationOnIcon,
    editCalendarIcon: EditCalendarIcon,
    groups2Icon: Groups2Icon,
    checkCircleOutline: CheckCircleOutlineIcon,
    summarizeIcon: SummarizeIcon,
    arrowBackIosNewIcon: ArrowBackIosNewIcon,
    groupAddIcon: GroupAddIcon

}

export default function Icon({name, ...props}){
    const IconComponent = icons[name]

    if (!IconComponent){
        console.warn(`Icon ${name} não encontrado`)
        return null
    }

    return <IconComponent{...props}/>
}