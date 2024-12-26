import { ReactNode } from 'react';

interface ThreePaneSectionProps {
    pane1: ReactNode;
    pane2: ReactNode;
    pane3: ReactNode;
}

export default function ThreePaneSection({ pane1, pane2, pane3 }: ThreePaneSectionProps) {
    return (
        <section className="flex flex-row flex-nowrap gap-5 px-32 py-4 ">
            <div className="flex flex-1 flex-grow flex-col gap-4">
                {pane1}
            </div>
            <div className="flex flex-1 flex-grow flex-col gap-4">
                {pane2}
            </div>
            <div className="flex flex-1 flex-grow flex-col gap-4">
                {pane3}
            </div>
        </section>
    );
}