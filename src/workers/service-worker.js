const CACHE_NAME = 'my-cache-v1';
const urlsToCache = ['/asset-qualquer.svg',];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            try {
                // Adicionar recursos ao cache manualmente
                await Promise.all(
                    urlsToCache.map(async (url) => {
                        const response = await fetch(url);
                        if (response.ok) {
                            await cache.put(url, response);
                        } else {
                            console.warn(`Não foi possível armazenar no cache: ${url}`);
                        }
                    })
                );
            } catch (error) {
                console.error('Erro ao adicionar ao cache:', error);
            }
        })
    );
});



self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Retornando do cache...', response)
            }
            return response || fetch(event.request);
        })
    );
});
