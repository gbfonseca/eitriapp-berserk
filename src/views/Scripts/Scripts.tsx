import { useEffect } from "react";
import { useFacebookPixel } from "src/hooks/useFbPixel";
import { View, Button, Page } from "eitri-luminus";

export default function Scripts() {

    useFacebookPixel('YOUR_PIXEL_ID');

    const trackEvent = () => {
        window.fbq('track', 'Purchase', {
            value: 29.99,
            currency: 'USD'
        });
    };

    return (
        <Page>
            <View>
                <Button onClick={trackEvent}>Track Event</Button>
            </View>
        </Page>
    );
}