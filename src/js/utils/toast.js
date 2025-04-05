
// A simple toast utility for the Catalyst framework
// This is a basic implementation to match our existing toast functionality

let toast = (props) => {
  console.log("Toast:", props);
  // Create and show toast notification
  const toastContainer = document.getElementById('toast-container') || createToastContainer();
  const toastElement = createToastElement(props);
  toastContainer.appendChild(toastElement);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    toastElement.classList.add('toast-fade-out');
    setTimeout(() => {
      toastElement.remove();
      if (toastContainer.children.length === 0) {
        toastContainer.remove();
      }
    }, 300);
  }, 3000);
};

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;
  document.body.appendChild(container);
  return container;
}

function createToastElement({ title, description, variant = 'default' }) {
  const toast = document.createElement('div');
  toast.classList.add('toast-notification');
  toast.classList.add(`toast-${variant}`);
  
  const backgroundColor = variant === 'destructive' ? '#f87171' : '#ffffff';
  const textColor = variant === 'destructive' ? '#ffffff' : '#333333';
  
  toast.style.cssText = `
    background-color: ${backgroundColor};
    color: ${textColor};
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    min-width: 300px;
    max-width: 400px;
    animation: toast-fade-in 0.3s ease;
  `;
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes toast-fade-in {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .toast-fade-out {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity 0.3s, transform 0.3s;
    }
  `;
  document.head.appendChild(style);
  
  const titleEl = document.createElement('div');
  titleEl.style.cssText = 'font-weight: bold; margin-bottom: 4px;';
  titleEl.textContent = title;
  
  const descEl = document.createElement('div');
  descEl.style.cssText = 'font-size: 14px;';
  descEl.textContent = description;
  
  toast.appendChild(titleEl);
  toast.appendChild(descEl);
  
  return toast;
}

// Export the toast function for use throughout the application
export { toast };
