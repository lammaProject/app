import React from "react";
import { userTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const {user, onClose } = userTelegram();

    return (
      <div className={'header'}>
     <button>Настя лучшая</button>
        <span className={'username'}>
            {user?.username}
        </span>
      </div>
    );
};

export default Header;