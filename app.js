// JNN Services - Application Interactive Logic

// Switch Sector Tabs (IT vs Executive)
function switchSectorTab(sectorId) {
  const tabIt = document.getElementById('tab-it');
  const tabNonIt = document.getElementById('tab-non-it');
  const contentIt = document.getElementById('content-it');
  const contentNonIt = document.getElementById('content-non-it');

  if (sectorId === 'it') {
    tabIt.classList.add('active');
    tabNonIt.classList.remove('active');
    contentIt.classList.remove('hidden');
    contentNonIt.classList.add('hidden');
  } else {
    tabNonIt.classList.add('active');
    tabIt.classList.remove('active');
    contentNonIt.classList.remove('hidden');
    contentIt.classList.add('hidden');
  }
}

// Modal Management
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function closeModalOnBackdrop(event, modalId) {
  if (event.target.classList.contains('modal-overlay')) {
    closeModal(modalId);
  }
}

// Handle Client Shortlist Form Submission
function handleShortlistSubmit(event) {
  event.preventDefault();
  closeModal('client-modal');
  showToast('✓ Shortlist request submitted! A Senior JNN Recruiter will contact you within 2 hours.');
  event.target.reset();
}

// Toast Notification Helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <span class="material-symbols-outlined text-emerald-400 text-[20px]">info</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Counter Animation for Hero Metrics
document.addEventListener('DOMContentLoaded', () => {
  const statNums = document.querySelectorAll('.stat-num');
  statNums.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target') || '0', 10);
    if (!target) return;
    
    let current = 0;
    const increment = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      if (target === 48) stat.textContent = `${current}-hr`;
      else if (target === 96) stat.textContent = `${current}%`;
      else if (target === 1200) stat.textContent = `${current.toLocaleString()}+`;
      else if (target === 90) stat.textContent = `${current}-Day`;
    }, 40);
  });
});
