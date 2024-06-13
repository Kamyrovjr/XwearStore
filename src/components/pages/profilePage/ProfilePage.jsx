import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, changePassword, updateUserData } from '@/store/reducer/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/utils/Routes';
import MyAccount from './ui/ProfileButtons/MyAccount';
import MyProfile from './ui/ProfileButtons/MyProfile';
import MyOrders from './ui/ProfileButtons/MyOrders';
import Password from './ui/ProfileButtons/Password';
import Exit from './ui/ProfileButtons/Exit';
import MyAccountBlock from './ui/Blocks/MyAccountBlock';
import MyProfileBlock from './ui/Blocks/MyProfileBlock';
import MyOrdersBlock from './ui/Blocks/MyOrdersBlock';
import EditPassword from './ui/Blocks/EditPassword';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isLoggedIn);
    const currentUser = useSelector(state => state.auth.currentUser);
    const [activeBlock, setActiveBlock] = useState('myAccount');
    const currentUserDataFromLocalStorage = JSON.parse(localStorage.getItem('userData'));
    const [myProfileData, setMyProfileData] = useState({
        firstName: currentUserDataFromLocalStorage?.firstName || currentUser?.firstName || '',
        lastName: currentUserDataFromLocalStorage?.lastName || currentUser?.lastName || '',
        email: currentUserDataFromLocalStorage?.email || currentUser?.email || '',
        phone: currentUserDataFromLocalStorage?.phone || currentUser?.phone || ''
    });
    const [savedMessage, setSavedMessage] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ROUTES.HOME);
        }
    }, [isAuthenticated, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate(ROUTES.HOME);
    };

    const renderBlock = () => {
        switch (activeBlock) {
            case 'MyProfile':
                return <MyProfileBlock 
                    onChange={handleInputChange} 
                    saveProfile={handleSaveProfile} 
                    myProfileData={myProfileData} 
                    savedMessage={savedMessage}
                />;
            case 'MyOrders':
                return <MyOrdersBlock />;
            case 'Password':
                return <EditPassword 
                    onChangePassword={handleSavePassword} 
                    passwordsMatch={passwordsMatch} 
                    currentPassword={currentPassword} 
                    setCurrentPassword={setCurrentPassword}
                    newPassword={newPassword}
                    setNewPassword={setNewPassword}
                    confirmPassword={confirmPassword} 
                    setConfirmPassword={setConfirmPassword}
                />;
            default:
                return <MyAccountBlock 
                    logout={handleLogout} 
                    firstName={myProfileData.firstName} 
                    activeMyProfile={activeBlock === 'MyProfile'} 
                    onClickButtonMyProfile={() => handleButtonClick('MyProfile')}
                    activeButtonMyOrders={activeBlock === 'MyOrders'} 
                    onClickButtonMyOrders={() => handleButtonClick('MyOrders')}
                />;
        }
    };

    const handleButtonClick = (blockName) => {
        setActiveBlock(blockName);
    };

    const handleInputChange = (event) => {
        const { name, value} = event.target;
        setMyProfileData({
            ...myProfileData,
            [name] : value
        });
    };

    const handleSaveProfile = () => {
        setSavedMessage(true); 
        setTimeout(() => {
            setSavedMessage(false);
        }, 2000);
        const updatedUserData = { ...currentUser, ...myProfileData };
        dispatch(updateUserData(updatedUserData))
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
    };

    const handleSavePassword = () => {
        if (newPassword !== confirmPassword) {
            setPasswordsMatch(false);
            return;
        }
        setPasswordsMatch(true);
        const updatedUserData = { ...currentUser, password: newPassword };
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
    
        dispatch(changePassword({ currentPassword, newPassword, confirmPassword }));
    };

    return (
        <div className='flex flex-col items-start justify-between w-full mb-20'>
            <div className='mb-11'>
                <h2 className='font-black text-3xl'>ЛИЧНЫЙ КАБИНЕТ</h2>
            </div>
            <div className='flex items-start justify-start'>
                <div className='flex flex-col items-start justify-center border border-solid rounded border-gray-200 mr-7' style={{padding: '28px 26px 20px 30px', minWidth: '318px'}}>
                    <MyAccount active={activeBlock === 'myAccount'} click={() => handleButtonClick('myAccount')}/>
                    <MyProfile active={activeBlock === 'MyProfile'} click={() => handleButtonClick('MyProfile')}/>
                    <MyOrders active={activeBlock === 'MyOrders'} click={ () =>handleButtonClick('MyOrders')}/>
                    <Password active={activeBlock === 'Password'} click={ () =>handleButtonClick('Password')}/>
                    <Exit logout={handleLogout}/> 
                </div>
                <div>
                    {renderBlock()}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;