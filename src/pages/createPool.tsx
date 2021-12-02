import React from 'react'
import Navigationbar from '../components/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { PageTitle, Title, Desc } from "../components/text/Text";
import Button from "../components/button/Button";
import { FormInput } from "../components/form/Form";
import DropdownInput from '../components/form/dropdownInput/DropdownInput';

export default function CreatePool() {
  const currencies = [
    {title: 'ETH', subTitle: 'Ethereum'},
    {title: 'BTC', subTitle: 'Bitcoin'},
    {title: 'USDT', subTitle: 'Tether'},
    {title: 'SOL', subTitle: 'Solana'},
    {title: 'ABT', subTitle: 'Arcblock'},
    {title: 'GTS', subTitle: 'GT STAR'},
  ]
  return (
    <>
      <Navigationbar />
      <div className="container h-100">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-auto h-100">
            <PageTitle value={'Public Pool'} variant={'dark'} />
            <Title value={'• Anyone can add liquidity'} variant={'dark'} />
            <Title value={'• Parameters cannot be modified after creation'} variant={'dark'} className="mb-4" />
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
                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <Desc className="form-check-label" value={'01 Choose Pool Type'} variant={'dark'} />
                  <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="publicPool" id="publicPool" checked />
                    <label className="btn btn-outline-primary">Public Pool</label>
                    <input type="radio" className="btn-check" name="privatePool" id="privatePool" />
                    <label className="btn btn-outline-primary disabled">Private Pool</label>
                    <input type="radio" className="btn-check" name="peggedPool" id="peggedPool" />
                    <label className="btn btn-outline-primary disabled">Pegged Pools</label>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <Desc className="form-check-label" value={'02 Choose Pool Template'} variant={'dark'} />
                  <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="standard" id="standard" checked />
                    <label className="btn btn-outline-primary">Standard</label>
                    <input type="radio" className="btn-check" name="singleToken" id="singleToken" />
                    <label className="btn btn-outline-primary disabled">Single Token</label>
                    <input type="radio" className="btn-check" name="custom" id="custom" />
                    <label className="btn btn-outline-primary disabled">Custom</label>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <Desc className="form-check-label" value={'03 Supply Initial Tokens'} variant={'dark'} />
                  <DropdownInput 
                          label='Quote Token Amount'
                          searchable={true} 
                          items={currencies} 
                          value={{title: 'Eth'}} 
                          inputType='number'
                          placeholder='0'
                          className="mb-4 mt-4"
                  />
                  <Desc className="text-center" value={'+'} variant={'dark'} />
                  <DropdownInput 
                          label='Base Token Amount'
                          searchable={true} 
                          items={currencies} 
                          value={{title: 'USDT'}} 
                          inputType='number'
                          placeholder='0'
                          className='mb-4'
                          disabled='disabled'
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 my-2">
                  <Desc className="form-check-label" value={'04 Parameters'} variant={'dark'} />
                  <div className="row">
                    <div className="col-3 my-auto">
                      <Desc className="" value={'Fee Rate (%)'} variant={'dark'} />
                    </div>
                    <div className="col-9">
                      <FormInput className="w-100" placeholder="(0%, 10%)" />
                    </div>
                  </div>
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
