import personalaccountpin from '../../assets/icons/personalacoountpin.svg'
import personalaccountperson from '../../assets/icons/personalaccountperson.svg'
import './PersonalAccount.scss'
const PersonalAccount: React.FC = () => {
    return (
        <div className="personal__account">
            <img className='personal__image' src={personalaccountpin} alt="personalaccountpin" />
            <img className='personal__image' src={personalaccountperson} alt="personalaccountperson" />
        </div>
    )
}

export default PersonalAccount
