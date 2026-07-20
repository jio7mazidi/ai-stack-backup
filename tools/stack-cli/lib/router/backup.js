function sanitizeProvider(provider) {

    const data = provider.data || {};

    const credentials = {};

    if (data.apiKey)
        credentials.apiKey = data.apiKey;

    if (data.accessToken)
        credentials.accessToken = data.accessToken;

    if (data.refreshToken)
        credentials.refreshToken = data.refreshToken;

    if (data.expiresAt)
        credentials.expiresAt = data.expiresAt;

    return {
        provider: provider.provider,
        authType: provider.authType,
        name: provider.name,
        credentials
    };

}

function createBackup(providers) {

    return {
        version: 1,
        createdAt: new Date().toISOString(),

        components: {

            router: {

                providers:
                    providers.map(sanitizeProvider)

            }

        }

    };

}

module.exports = {
    createBackup
};