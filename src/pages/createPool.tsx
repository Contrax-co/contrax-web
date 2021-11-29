import React from 'react'
import Navigationbar from '../components/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { PageTitle, Title, Desc } from "../components/text/Text";
import { FormInput, FormCheckbox } from "../components/form/Form";
import Button from "../components/button/Button";

export default function CreatePool() {
    return (
        <>
        <Navigationbar />
        <div className="container h-100">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-auto h-100">
            <PageTitle value={'Public Pool'} variant={'dark'} />
            <Title value={'• Anyone can add liquidity'} variant={'dark'} />
            <Title value={'• Parameters cannot be modified after creation'} variant={'dark'} />
            <br />
            <PageTitle value={'Standard'} variant={'dark'} />
            <Title value={'• 50/50 value liquidity provision (same as Uniswap)'} variant={'dark'} />
            <Title value={'• More parameters can be set'} variant={'dark'} />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
          <form className="px-4 py-4 my-5 formBackgroundDesign">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <Title variant={'dark'} value={'Create a pool'} ></Title>
                </div>
              </div>
              <div className="row justify-content-center mx-5 mt-3">
                  <Button type="submit" label={'Create'} variant="primary" />
              </div>
            </form>
          </div>
        </div>
        </div>
        <BottomBar />    
        </>
    )
}
