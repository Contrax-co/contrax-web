import { useState } from 'react'
import Button from '../button/Button'
import Card from '../card/Card'
import DropdownInput from '../form/dropdownInput/DropdownInput'
import { FormInput } from '../form/Form'
import { Title, Desc } from '../text/Text'
import { StyledInputDesc, StyledSettingCard, StyledSmallBtn, StyledSmallInput } from './CoinSwap.styles'

export default function CoinSwap() {
  const [showSetting, setShowSetting] = useState(false)

  const currencies = [
    { title: 'ETH', subTitle: 'Ethereum' },
    { title: 'BTC', subTitle: 'Bitcoin' },
    { title: 'USDT', subTitle: 'Tether' },
    { title: 'SOL', subTitle: 'Solana' },
    { title: 'ABT', subTitle: 'Arcblock' },
    { title: 'GTS', subTitle: 'GT STAR' },
  ]

  const back = () => {
    setShowSetting(false)
  }

  return (
    <Card>
      {
        showSetting && 
        <StyledSettingCard>
          <div className="text-left">
            <Button onClick={back} icon="fa-long-arrow-alt-left"></Button>
          </div>
          <div className="row mt-3">
            <Desc>Slippage Tolerance</Desc>
          </div>
          <div className="row mt-1">
            <div className="col-md-3">
              <StyledSmallBtn className="btn btn-primary m-1" type="button">0.5%</StyledSmallBtn>
            </div>
            <div className="col-md-3">
              <StyledSmallBtn className="btn btn-primary m-1" type="button">1%</StyledSmallBtn>
            </div>
            <div className="col-md-3">
              <StyledSmallBtn className="btn btn-primary m-1" type="button">3%</StyledSmallBtn>
            </div>
            <div className="col-md-3">
              <StyledSmallInput height="39px" /> <StyledInputDesc>%</StyledInputDesc>
            </div>
          </div>

          <div className="row mt-3">
            <Desc>Transaction Deadline</Desc>
          </div>
          <div className='row'>
            <div className="col-md-3">
              <FormInput height="39px" />
            </div>
            <div className='col-md-3 p-0 mt-2'><Desc>min</Desc></div>
          </div>
        </StyledSettingCard>
      }
      <div className="text-right">
        <Button onClick={()=>{setShowSetting(true)}} icon="fa-cog" />
      </div>
      <Title className="mt-1">Swap into more than 2000 tokens, using the best quotes from over 20 sources.</Title>
      <DropdownInput
        label='Pay'
        searchable={true}
        items={currencies}
        value={{ title: 'Eth' }}
        inputType='number'
        placeholder='0'
        className="mb-4 mt-4"
      />

      <DropdownInput
        label='Receive'
        searchable={true}
        items={currencies}
        value={{ title: 'USDT' }}
        inputType='number'
        placeholder='0'
        className='mb-4'
        disabled='disabled'
      />
      <Title>1 ETH = 4482.6722 USDC</Title>
      <Button label='Exchange' />
      <Desc className="mt-5">Slippage Tolerance: 3%</Desc>
      <Desc>Minimum Received 4339.4263 USDC</Desc>
    </Card>
  )
}
