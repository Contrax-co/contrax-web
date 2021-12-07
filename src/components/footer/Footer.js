import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link, PageTitle, Title, Desc } from '../text/Text';
import BottomBar from '../bottomBar/BottomBar';

export default function Footer() {
  const location = useLocation();
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4" >
            <PageTitle>Contrax</PageTitle>
            <Title>Fast. Secure. Permissionless. </Title>
          </div>
          <div className="col-md-4">
            <b>Social Media Links</b>
              <div className="row">
                <Link text={'Discord'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'Medium'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'Twitter'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'GitHub'} link={'#'} />
              </div>
          </div>
          <div className="col-md-4">
            <b>Love Contrax?</b>
            <Desc>Contrax free and open-source DAO, and your donations go to the community DAO to keep the project running.</Desc>
            <ul className="list-group list-group-flush">
              <div className="row">
                <Link text={'Give in ETH'} link={'#'} />
              </div>
              <div className="row">
                <Link text={'Give in BTC'} link={'#'} />
              </div>
            </ul>
          </div>
        </div>
      </div>
      {location === '/'  ? 
        null
      :(
        <BottomBar />
      ) }
    </div>
  )
}
