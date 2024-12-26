import { CloudDownloadIcon } from "hugeicons-react";
import { ReactNode } from "react";

interface DownloadSpecificPlatformProps {
    icon: ReactNode;
    platformName: string;
    platformDescription: string;
    isDownloadable?: boolean;
    downloadUrl?: string;
}

export default function DownloadSpecificPlatform({icon, platformName, platformDescription, isDownloadable = false, downloadUrl = ""} : DownloadSpecificPlatformProps){
    return (
        <div className="flex flex-col gap-4 border rounded-lg p-4">
            <p className="primary-text">{icon}</p>
            <p className="font-bold">{platformName}</p>
            <p>{platformDescription}</p>
            <div className="flex flex-row">
                <span className="primary-text flex-1">
                    { isDownloadable ? <a href={downloadUrl} target="_blank" className="primary-text underline">Download the app</a> : "Coming soon" }
                </span>
                { isDownloadable ? <a href={downloadUrl} target="_blank" className="primary-text"> <CloudDownloadIcon/> </a> : null }
            </div>
        </div>
    );
} 