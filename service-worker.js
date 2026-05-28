const CACHE_NAME = 'inventory-app-v1';
// เก็บเฉพาะไฟล์หลักๆ ที่จำเป็นต้องใช้ในการเปิดแอป
const ASSETS_TO_CACHE = [
    'index.html',
    'manifest.json',
    'script.js',
    'style.css',
    'styleitemstock.css',
    'itemstock.html'
];

// ขั้นตอนการติดตั้ง: บันทึกไฟล์หลักลงเครื่อง (ทำครั้งเดียวตอนติดตั้ง)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// ขั้นตอนการเรียกใช้: พยายามดึงข้อมูลจากเน็ตก่อน ถ้าเน็ตหลุดค่อยดึงจาก Cache (Network First)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});