import React from 'react'
import Button from './button/Button'
import { Text, H3 } from "./text/Text";

export default function banner() {
  return (
    <div>
      <header className="masthead home-background mb-5">
        <div className="container h-100">
          <div className="row">
            <div className="col-lg-6 col-sm-12 mx-auto my-auto">
              <H3 value={'Contrax Wallet'} variant={'light'} />
              <Text value={'The Contrax web app simplifies the process of developing, testing, deploying and managing smart contracts with an intuitive interface.'} variant={'light'} />
              <Button label={'Connect Wallet'} variant="primary" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="row h-100 align-items-center">
                <div className="home-image mt-3"> </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
