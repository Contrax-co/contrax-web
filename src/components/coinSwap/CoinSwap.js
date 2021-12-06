import { useState } from 'react'
import Button from '../button/Button'
import Card from '../card/Card'
import DropdownInput from '../form/dropdownInput/DropdownInput'
import { Title, Desc } from '../text/Text'
import { StyledSettingCard } from './CoinSwap.styles'

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
          <Button onClick={back}>Back</Button>
          <div>
            <Button class="btn btn-primary" type="button">1%</Button>
            <Button class="btn btn-primary" type="button">2%</Button>
            <Button class="btn btn-primary" type="button">3%</Button>
          </div>
        </StyledSettingCard>
      }
      <Button onClick={()=>{setShowSetting(true)}}>Settings</Button>
      <Title>Swap into more than 2000 tokens, using the best quotes from over 20 sources.</Title>
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
