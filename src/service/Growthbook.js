import { GrowthBook } from "@growthbook/growthbook";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default class Growthbook {
    checkoutPage = "CheckoutV1";

    growthbook = new GrowthBook({
        apiHost: "https://cdn.growthbook.io",
        clientKey: "sdk-7EGX3ITKtjxBbTD0",
        enableDevMode: true,
        subscribeToChanges: true,
        trackingCallback: (experiment, result) => {
            // TODO: Use your real analytics tracking system
            console.log("Viewed Experiment", {
                experimentId: experiment.key,
                variationId: result.key,
            });
        },
    });

    async setup() {
        // Wait for features to be available
        const teste = await this.growthbook.loadFeatures();
        console.log(teste);

        const value = this.growthbook.getFeatureValue("checkout", {});
        console.log(value);
        this.checkoutPage = value.layout;
    }

    async send() {
        this.growthbook.setAttributes({
            id: getRandomInt(10),
            url: "foo",
            path: "foo",
            host: "foo",
            query: "foo",
            deviceType: "desktop",
            browser: "chrome",
            utmSource: "foo",
            utmMedium: "foo",
            utmCampaign: "foo",
            utmTerm: "foo",
            utmContent: "foo",
        });
    }
}
