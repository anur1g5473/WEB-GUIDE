import { useState } from 'react';

export default function ModalDialogDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <div className="demo-modal-wrapper">
        
        <button 
          className="demo-btn demo-btn-primary" 
          onClick={() => setIsOpen(true)}
        >
          Open Modal Dialog
        </button>

        <div 
          className={`demo-modal-backdrop ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="demo-modal"
            onClick={(e) => e.stopPropagation()} // Prevent bubbling up to backdrop
          >
            <button 
              className="demo-modal-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h3 className="demo-modal-title">Delete Account</h3>
            <p className="demo-modal-text">
              Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button 
                className="demo-btn demo-btn-secondary" 
                style={{ padding: '8px 16px' }}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button 
                className="demo-btn demo-btn-primary" 
                style={{ padding: '8px 16px', background: '#EF4444' }}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
