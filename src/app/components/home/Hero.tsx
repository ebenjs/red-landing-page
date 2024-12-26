import { AndroidIcon, AppleIcon } from "hugeicons-react";
import TwoPaneSection from "../global/TwoPaneSection";
import DownloadSpecificPlatform from "./DownloadSpecificPlatform";

export default function Hero() {
    const downloadWidgetForAndroid = <DownloadSpecificPlatform icon={<AndroidIcon size={32}/>} platformName="Android" platformDescription="The android version of Red is available on Google Play Store for free." isDownloadable={true} downloadUrl="https://play.google.com/store/apps/details?id=com.ebenjs.red&pcampaignid=web_share"/>;
    const downloadWidgetForIos = <DownloadSpecificPlatform icon={<AppleIcon size={32}/>} platformName="iPhone" platformDescription="The iOS version of Red is planned to be launched on June 17th."/>;

    return (
        <>
            <p className="text-5xl font-medium leading-12">
                Simple, Secure, Reliable dating app.
            </p>
            <p className="text-lg">
                Find your perfect match and ignite your love story – download our dating app today!
            </p>
            <TwoPaneSection paddingX="" pane1={downloadWidgetForAndroid} pane2={downloadWidgetForIos} />
        </>
    );
}