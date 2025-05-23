import HeaderComponent from "../../components/HeaderComponent";
import { useEffect } from "react";

export default function Scripts() {

    const handleCredentialResponse = (response) => {
        console.log(response);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.crossOrigin = 'anonymous';

        script.onload = () => {
            // Script loaded successfully
            console.log('Google Sign-In script loaded');
            // Initialize Google Sign-In here
            window.google.accounts.id.initialize({
                client_id: 'YOUR_CLIENT_ID',
                callback: handleCredentialResponse
            });
        };

        document.body.appendChild(script);

        // Cleanup function to remove script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <Window>
        <HeaderComponent title="Scripts" />
        <Text>Scripts</Text>
    </Window>;
}