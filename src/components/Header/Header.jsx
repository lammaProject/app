import React from "react";
import { userTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header = () => {
    const {user, onClose } = userTelegram();

    return (
      <div className={'header'}>
        <span className={'username'}>
            {user?.username}
        </span>
      </div>
    );
};

export default Header;