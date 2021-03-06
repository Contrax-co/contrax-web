import { useState } from 'react'
import { Col, Row } from '../blocks/Blocks'
import Button from '../button/Button'
import Card from '../card/Card'
import DropdownInput from '../form/dropdownInput/DropdownInput'
import { FormInput } from '../form/Form'
import { Desc, H3 } from '../text/Text'
import { StyledInputDesc, StyledSettingCard, StyledSmallBtn, StyledSmallInput } from './CoinSwap.styles'
import * as colors from '../../theme/colors';

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
    <Card className='border-0 mt-5' background={colors.secondaryLight} >
      {
        showSetting && 
        <StyledSettingCard>
          <div className="text-left">
            <Button onClick={back} className='bg-white border-0 p-0' icon="fa-long-arrow-alt-left"></Button>
          </div>
          <Row className="mt-3">
            <Desc>Slippage Tolerance</Desc>
          </Row>
          <Row className="mt-1">
            <Col size="3">
              <StyledSmallBtn className="btn btn-primary m-1" type="button">0.5%</StyledSmallBtn>
            </Col>
            <Col size="3">
              <StyledSmallBtn className="btn btn-primary m-1" type="button">1%</StyledSmallBtn>
            </Col>
            <Col size="3">
              <StyledSmallBtn className="btn btn-primary m-1" type="button">3%</StyledSmallBtn>
            </Col>
            <Col size="3">
              <StyledSmallInput height="39px" /> <StyledInputDesc>%</StyledInputDesc>
            </Col>
          </Row>

          <Row className="mt-3">
            <Desc>Transaction Deadline</Desc>
          </Row>
          <Row>
            <Col size="3">
              <FormInput height="39px" />
            </Col>
            <Col size="3" className='p-0 mt-2'><Desc>min</Desc></Col>
          </Row>
        </StyledSettingCard>
      }
      <div className="text-right">
        <Button className='bg-white border-0 p-0' onClick={()=>{setShowSetting(true)}} icon="fa-cog" label='' />
      </div>
      <H3 className="mt-1">Swap into more than 2000 tokens, using the best quotes from over 20 sources.</H3>
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
      <H3 color={colors.accentDark}>1 ETH = 4482.6722 USDC</H3>
      <Row>
        <Button label='Exchange' className='col mt-4' primary />
      </Row>
      <Desc className="mt-5">Slippage Tolerance: 3%</Desc>
      <Desc>Minimum Received 4339.4263 USDC</Desc>
    </Card>
  )
}
