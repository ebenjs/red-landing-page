import { ReactNode } from 'react';

interface TwoPaneSectionProps {
    pane1: ReactNode;
    pane2: ReactNode;
}

export default function TwoPaneSection({ pane1, pane2 }: TwoPaneSectionProps) {
    return (
        <section className="flex justify-between items-center px-32 py-10">
            <div className="flex flex-col gap-4">
                {pane1}
            </div>
            <div className="flex flex-col gap-4">
                {pane2}
            </div>
        </section>
    );
}