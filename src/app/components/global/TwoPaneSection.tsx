import { ReactNode, useMemo } from 'react';

interface TwoPaneSectionProps {
    pane1: ReactNode;
    pane2: ReactNode;
    paddingX? : string;
}

export default function TwoPaneSection({ pane1, pane2, paddingX}: TwoPaneSectionProps) {
    
    return (
        <section className={`flex flex-row flex-nowrap gap-5 ${paddingX} py-10`}>
            <div className={`flex flex-col w-1/2 gap-4`}>
                {pane1}
            </div>
            <div className={`flex flex-col w-1/2 gap-4`}>
                {pane2}
            </div>
        </section>
    );
}