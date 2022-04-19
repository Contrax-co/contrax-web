import React, { useState } from 'react'
import Navigationbar from '../components/Navigationbar/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { Title, H1, H3, B1, Link, Desc, H2 } from "../components/text/Text";
import Button, { ButtonGroupRadio } from "../components/button/Button";
import { Form, FormInput } from "../components/form/Form";
import DropdownInput from '../components/form/dropdownInput/DropdownInput';
import { Col, Container, Row } from '../components/blocks/Blocks';
import * as colors from '../theme/colors';
import TokenModal from '../components/TokenModal';
import StatsCard from '../components/statsCard/StatsCard';
import { StyledDropBtn, StyledInput } from '../components/form/dropdownInput/DropdownInput.styles';
import { Image } from '../components/image/Image';
import PriceCounter from '../components/PriceCounter';

export default function CreatePoolNew() {
  const currencies = [
    { title: 'ETH', subTitle: 'Ethereum' },
    { title: 'BTC', subTitle: 'Bitcoin' },
    { title: 'USDT', subTitle: 'Tether' },
    { title: 'SOL', subTitle: 'Solana' },
    { title: 'ABT', subTitle: 'Arcblock' },
    { title: 'GTS', subTitle: 'GT STAR' },
  ]

  const [tokenOne, setTokenOne] = useState(null);
  const [tokenTwo, setTokenTwo] = useState(null);
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(1);

  const handleCreatePool = () => {
    if (minValue > maxValue) {
      return alert('Min value cannot be greater than max value');
    }
  }

  return (
    <>
      <Navigationbar />
      <Container className="h-100 pool">
        <Row>
          <Col size='12' className='pt-5'>
            <Form className="px-4 my-5">
              <Row>
                <Col size='12' className="my-2 create-pool-title">
                  <H2>Create Pool</H2>
                </Col>
                <Row>
                  <Col size='1' />
                  <Col size='6' className="my-2">
                    <Col size='12'>
                      <Col className="mb-22">
                        <H3>Select Pair</H3>
                      </Col>
                      <Row>
                        <Col>
                          <StyledDropBtn className="btn dropdown-toggle" type="button"
                            data-bs-target="#tokenModal" data-bs-toggle="modal"
                            aria-expanded="false" style={{ width: '100%', borderRadius: 4 }}>
                            <div className='create-pool-tokenDropdown'>
                              {
                                tokenOne && (
                                  <Image src={tokenOne['logoURI'] ?? ''} style={{ marginRight: '5%' }} width='32' height='32' alt={tokenOne['symbol'] ?? ''} />
                                )
                              }
                              {tokenOne ? String(tokenOne['symbol']).split(' ')[0].trim() : 'Select a token'}
                            </div>
                          </StyledDropBtn>
                        </Col>
                        <Col>
                          <StyledDropBtn className="btn dropdown-toggle" type="button"
                            data-bs-target="#tokenModalTwo" data-bs-toggle="modal"
                            aria-expanded="false" style={{ width: '100%', borderRadius: 4 }}>
                            <div className='create-pool-tokenDropdown'>
                              {
                                tokenTwo && (
                                  <Image src={tokenTwo['logoURI'] ?? ''} style={{ marginRight: '5%' }} width='32' height='32' alt={tokenTwo['symbol'] ?? ''} />
                                )
                              }
                              {tokenTwo ? String(tokenTwo['symbol']).split(' ')[0].trim() : 'Select a token'}
                            </div>
                          </StyledDropBtn>
                        </Col>
                      </Row>
                    </Col>
                    <Col size='12' className='depositeAmount'>
                      <Col className="mb-22">
                        <H3>Deposite Amount</H3>
                      </Col>
                      <Col>
                        {tokenOne ? (
                          <div className='depositeAmount-group'>
                            <div className='selectedToken-div'>
                              {tokenOne && (<Image src={tokenOne['logoURI'] ?? ''} style={{ marginRight: '10%' }} width='24' height='24' alt={tokenOne['symbol'] ?? ''} />)}
                              {tokenOne && (String(tokenOne['symbol']).split(' ')[0].trim())}
                            </div>
                            <input placeholder='0.0' type={"number"} className='depositeAmount-input' />
                          </div>
                        ) : (
                          <div className='select-a-token'>select a Token</div>
                        )}
                      </Col>
                      <Col>
                        {tokenTwo ? (
                          <div className='depositeAmount-group'>
                            <span className='selectedToken-div'>
                              {tokenTwo && (<Image src={tokenTwo['logoURI'] ?? ''} style={{ marginRight: '10%' }} width='24' height='24' alt={tokenTwo['symbol'] ?? ''} />)}
                              {tokenTwo && (String(tokenTwo['symbol']).split(' ')[0].trim())}
                            </span>
                            <input placeholder='0.0' type={"number"} className='depositeAmount-input' />
                          </div>
                        ) : (
                          <div className='select-a-token'>select a Token</div>
                        )}
                      </Col>
                    </Col>
                  </Col>
                  <Col size='1' />
                  <Col size='4' className="my-2">
                    <Col className="mb-22">
                      <H3>Set Price Range</H3>
                    </Col>
                    <PriceCounter
                      label='Min Price'
                      subLabel='per ETH'
                      value={minValue}
                      onDecrease={() => {
                        if (minValue != 1) {
                          setMinValue(minValue - 1)
                        }
                      }}
                      onIncrease={() => setMinValue(minValue + 1)}
                    />
                    <PriceCounter
                      label='Min Price'
                      subLabel='per ETH'
                      value={maxValue}
                      onDecrease={() => {
                        if (maxValue != 1) {
                          setMaxValue(maxValue - 1)
                        }
                      }}
                      onIncrease={() => setMaxValue(maxValue + 1)}
                    />
                    <Button
                      className="row justify-content-center mt-2 mb-2 btnCreatePool"
                      label={'Create Pool'}
                      primary
                      onClick={handleCreatePool}
                    />
                  </Col>
                </Row>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <BottomBar />
      <TokenModal id='tokenModal' onSelection={(item: any) => {
        setTokenOne(item)
      }} />
      <TokenModal id='tokenModalTwo' onSelection={(item: any) => {
        setTokenTwo(item)
      }} />
    </>
  )
}
