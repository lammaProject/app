import React from "react";
import { userTelegram } from '../../hooks/useTelegram';
import Button from '../button/Button';
import './Header.css';

const Header = () => {
    const {user, onClose } = userTelegram();

    return (
      <div className={'header'}>
      <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {user?.username}
        </span>
      </div>
    );
};

export default Header;