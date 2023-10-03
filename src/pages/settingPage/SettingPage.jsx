// react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// components
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import PrimaryInput from '../../components/primaryInput/PrimaryInput';
// package
import Swal from 'sweetalert2';
// context
import { useAuth } from '../../contexts/AuthContext';
// api
import axiosInstance, { baseUrl } from '../../api/axiosInstance';
// css
import './SettingPage.scss';

const SettingPage = () => {
  // currentMemberData
  const { isAuthenticated, currentMember, logout } = useAuth();
  const currentAvatar = currentMember?.avatar;
  const currentId = currentMember?.id;
  const currentUsername = currentMember?.name;
  const currentIntroduction = currentMember?.introduction;
  // useState
  const [username, setUserName] = useState(currentUsername);
  const [introduction, setIntroduction] = useState(currentIntroduction);
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [currentImage, setCurrentImage] = useState(currentAvatar);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setSelectedImage(file);
    setCurrentImage(URL.createObjectURL(file));
  };

  const handleImageSubmit = async () => {
    const formData = {
      id: currentId,
      username: username,
      introduction: introduction,
      password: password,
      newPassword: checkPassword,
      avatar: selectedImage,
    };
    const putUseSettingInfo = async (formData, currentId) => {
      try {
        const res = await axiosInstance.put(
          `${baseUrl}/users/${currentId}`,
          formData,
          { headers: { 'Content-type': 'multipart/form-data' } }
        );
        if (res.status === 200) {
          Swal.fire({
            position: 'top',
            title: '修改成功!',
            text: '請重新登入',
            icon: 'success',
            showConfirmButton: true,
          });
          logout();
        }
        return res;
      } catch (error) {
        console.error(error);
        console.error(error.response.data.message);
      }
    };
    const res = await putUseSettingInfo(formData, currentId);
    console.log(res);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className='settingPage'>
      <Navbar />
      <div className='settingBody'>
        <Header />
        <div className='settingMain'>
          <div className='photoEdit'>
            <img className='userImg' src={currentImage} alt='user-img' />
            <label className='medium-14' htmlFor='666'>
              更新圖片
            </label>
            <input
              type='file'
              id='666'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </div>
          <div className='settingInput'>
            <PrimaryInput
              label='名稱'
              placeholder={currentUsername}
              value={username}
              onChange={(nameInputValue) => setUserName(nameInputValue)}
            />
            <PrimaryInput
              label='Introduction'
              placeholder={currentIntroduction}
              value={introduction}
              onChange={(introductionInputValue) =>
                setIntroduction(introductionInputValue)
              }
            />
            <PrimaryInput
              type='password'
              label='舊密碼'
              placeholder={'請輸入密碼'}
              value={password}
              onChange={(passwordInputValue) => setPassword(passwordInputValue)}
            />
            <PrimaryInput
              type='password'
              label='密碼確認'
              placeholder={'請輸入密碼'}
              value={checkPassword}
              onChange={(checkPasswordInputValue) =>
                setCheckPassword(checkPasswordInputValue)
              }
            />
          </div>
          <button
            className='secondary-button bold-16'
            onClick={handleImageSubmit}
          >
            更改資料
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
