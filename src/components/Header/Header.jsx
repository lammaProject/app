import React from 'react';

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
      <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
            {tg.initDataUnsafe?.user?.username}
        </span>
      </div>
    );
};

export default Header;