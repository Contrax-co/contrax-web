import React from 'react'
import { Desc, PageTitle, Title } from './text/Text'
import { useLocation } from 'react-router-dom'
import { Col } from './blocks/Blocks';

export default function Header() {
    const location = useLocation();
    return (
        <>
            <header className="pageHeader dashboard-background mb-5">
                <div className="container h-100">
                    <div className="row h-100 image-title">
                        {location.pathname === '/dashboard' ? (
                            <> 
                                <Col className="my-auto">
                                  <PageTitle variant={'light'} className="fw-light text-center mt-5">Contrax Dashboard</PageTitle>
                                </Col>
                                <Col className="my-auto">
                                    <Desc variant={'light'}> Net Worth</Desc>
                                    <Title variant={'light'} className="mb-3">$6,905.51</Title>
                                </Col>
                            </>
                        ):
                        <>
                          <Col className="my-auto">
                            <PageTitle variant={'light'} className="fw-light text-center mt-5">Manage Token</PageTitle>
                          </Col>
                          <Col className="my-auto">
                              <Desc variant={'light'}> Net Worth</Desc>
                              <Title variant={'light'} className="mb-3">$6,905.51</Title>
                          </Col>
                        </>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}
