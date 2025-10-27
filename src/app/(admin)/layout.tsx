'use client'

import { ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    children: ReactNode
}

export default function AdminLayout(props: Props) {
    return (
        <html lang="en">
            <body>
                <main>
                    <span>{props.children}</span>
                </main>
            </body>
        </html>
    );
}