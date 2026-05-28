// ลงทะเบียนเพื่อให้เบราว์เซอร์ยอมรับว่าเป็น PWA และติดตั้งลงหน้าจอได้
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('PWA Registered!'))
            .catch(err => console.log('PWA Failed', err));
    });
}