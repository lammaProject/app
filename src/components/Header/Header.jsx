import React from "react";
import Button from "../Button/Button";
import { userTelegram } from './hooks/useTelegram';

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