const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');
menu?.addEventListener('click',()=>nav.classList.toggle('menu-open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('menu-open')));

const form = document.querySelector('#bookingForm');
form?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();
  const service = document.querySelector('#service').value;
  const date = document.querySelector('#date').value || 'غير محدد';
  const notes = document.querySelector('#notes').value.trim() || 'لا توجد ملاحظات';
  if(!name || !phone || !service) return;
  const msg = `مرحباً، أرغب بحجز موعد في عيادة الابتسامة%0Aالاسم: ${encodeURIComponent(name)}%0Aالهاتف: ${encodeURIComponent(phone)}%0Aالخدمة: ${encodeURIComponent(service)}%0Aالتاريخ المفضل: ${encodeURIComponent(date)}%0Aملاحظات: ${encodeURIComponent(notes)}`;
  window.open(`https://wa.me/963994412964?text=${msg}`,'_blank','noopener');
});
