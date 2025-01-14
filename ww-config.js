export default {
    editor: {
        designSystemId: 'ab8d890a-ac3a-4678-9e80-e0c91005a495',
        /* wwEditor:start */
        settings: {
            copilot: {
                description: 'Configure YouTube plugin settings',
                returns: 'void',
                schema: {
                    apiKey: {
                        type: 'string',
                        description: 'YouTube API key for accessing YouTube services',
                        bindable: false
                    }
                }
            }
        }
        /* wwEditor:end */
    },
};