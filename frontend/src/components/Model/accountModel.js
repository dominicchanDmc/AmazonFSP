import React from 'react';

function AccountModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="account-modal">
      <div className='modal-background'>

      </div>
      <div className='modal-foreground'>
      This is a hover modal!

      </div>
    </div>
  );
}

export default AccountModal;