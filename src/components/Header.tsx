import React from 'react'
import { Desc, PageTitle, Title } from './text/Text'

export default function Header() {
    return (
        <>
            <header className="pageHeader dashboard-background mb-5">
                <div className="container h-100">
                    <div className="row h-100 image-title">
                        <div className="col-12 my-auto">
                          <PageTitle variant={'light'} className="fw-light text-center mt-5">Contrax Dashboard</PageTitle>
                        </div>
                        <div className="col 12 my-auto">
                            <Desc variant={'light'}> Net Worth</Desc>
                            <Title variant={'light'} className="mb-3">$6,905.51</Title>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}
