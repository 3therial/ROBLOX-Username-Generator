module.exports = {
    autoStart: {
        enabled: true, //needs boolean value, so true or false. No string
        maxAmount: null //amount to gen, put null/infinity for it to go infitely long
    },
    minimumLetters: 5, //minnimum characters, reccoment not going < 5 as since 4 chars are not available anymore
    maximumLetters: 5, // make this what you like
    useDiscordWebhook: {
        enabled: true, //enable for it to be sent to your discord
        webhookLink: "https://discord.com/api/webhooks/1072093125490786384/4fShVgfuIDb6nkHXlFp8VG0hBOiqyuHvQ1nGqWFwi9rHtioGui9wK0oUCu_Zmrms55v9" //put your webhook inbetween the brackets
    },
    useWebServer: true
};