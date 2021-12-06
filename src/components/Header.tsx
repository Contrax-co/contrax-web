import React from 'react'
import { Desc, PageTitle, Title } from './text/Text'
import { useLocation } from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    return (
        <>
            <header className="pageHeader dashboard-background mb-5">
                <div className="container h-100">
                    <div className="row h-100 image-title">
                        {location.pathname === '/dashboard' ? (
                            <> 
                                <div className="col-12 my-auto">
                                    <h1 className="fw-light text-center mt-5">Contrax Dashboard</h1>
                                </div>
                                <div className="col 12 my-auto">
                                <p>Net Worth</p>
                                <h3 className="mb-3">$6,905.51</h3>
                                </div>
                            </>
                        ):
                        <>
                          <div className="col-12 my-auto">
                            <PageTitle variant={'light'} className="fw-light text-center mt-5">Contrax Dashboard</PageTitle>
                          </div>
                          <div className="col 12 my-auto">
                              <Desc variant={'light'}> Net Worth</Desc>
                              <Title variant={'light'} className="mb-3">$6,905.51</Title>
                          </div>
                        </>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}
