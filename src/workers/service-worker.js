const CACHE_NAME = 'my-cache-v1';
const urlsToCache = ['/', '/index.html', '/static/js/bundle.js', 'https://calindra.tech/eitri/product_list.json', 'https://release.eitri.calindra.com.br/themes/852ff350-8d65-49cc-815e-12483b37d425/theme.css'];

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
