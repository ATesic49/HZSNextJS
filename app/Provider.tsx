'use client'
import React from 'react'
import Header from './components/Header'
import Footer from './components/UI/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function Provider({
    children,
}: {
    children: React.ReactNode
}) {
    const queryClient = new QueryClient()
    return (<QueryClientProvider client={queryClient}>
        <div className="font-[Inter] bg-stone-100">
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    </QueryClientProvider>
    )
}

export default Provider