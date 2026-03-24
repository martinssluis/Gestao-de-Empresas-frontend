import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Groups2Icon from '@mui/icons-material/Groups2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WarehouseTwoToneIcon from '@mui/icons-material/WarehouseTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import KeyboardDoubleArrowDownTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowDownTwoTone';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
import DataSaverOffTwoToneIcon from '@mui/icons-material/DataSaverOffTwoTone';
import CategoryTwoToneIcon from '@mui/icons-material/CategoryTwoTone';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PendingActionsTwoToneIcon from '@mui/icons-material/PendingActionsTwoTone';
import ExposureTwoToneIcon from '@mui/icons-material/ExposureTwoTone';
import PaidTwoToneIcon from '@mui/icons-material/PaidTwoTone';

const icons ={
    addIcon: AddIcon,
    peopleIcon: PeopleIcon,
    monetizationOnIcon: MonetizationOnIcon,
    editCalendarIcon: EditCalendarIcon,
    groups2Icon: Groups2Icon,
    checkCircleOutline: CheckCircleOutlineIcon,
    summarizeIcon: SummarizeIcon,
    arrowBackIosNewIcon: ArrowBackIosNewIcon,
    groupAddIcon: GroupAddIcon,
    warehouseTwoToneIcon: WarehouseTwoToneIcon,
    cancelTwoToneIcon: CancelTwoToneIcon,
    descriptionTwoToneIcon: DescriptionTwoToneIcon,
    checkCircleTwoToneIcon: CheckCircleTwoToneIcon,
    keyboardDoubleArrowDownTwoToneIcon: KeyboardDoubleArrowDownTwoToneIcon,
    keyboardDoubleArrowUpTwoToneIcon: KeyboardDoubleArrowUpTwoToneIcon,
    dataSaverOffTwoToneIcon: DataSaverOffTwoToneIcon,
    categoryTwoToneIcon: CategoryTwoToneIcon,
    accountBalanceWalletTwoToneIcon: AccountBalanceWalletTwoToneIcon,
    pendingActionsTwoToneIcon:PendingActionsTwoToneIcon,
    exposureTwoToneIcon: ExposureTwoToneIcon,
    paidTwoToneIcon: PaidTwoToneIcon
}

export default function Icon({name, ...props}){
    const IconComponent = icons[name]

    if (!IconComponent){
        console.warn(`Icon ${name} não encontrado`)
        return null
    }

    return <IconComponent{...props}/>
}