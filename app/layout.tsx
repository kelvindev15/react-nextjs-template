"use client";

import React from 'react'
import '@/global.css'
import { Provider } from 'react-redux'
import store from '@/app/storage/store'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Provider store={store}>
                <body>{children}</body>
            </Provider>
        </html>
    )
}
