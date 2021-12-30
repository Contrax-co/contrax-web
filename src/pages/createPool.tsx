import React from 'react'
import Navigationbar from '../components/Navigationbar/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { Title, H1, H3, B1 } from "../components/text/Text";
import Button, { ButtonGroupRadio } from "../components/button/Button";
import { Form, FormInput } from "../components/form/Form";
import DropdownInput from '../components/form/dropdownInput/DropdownInput';
import { Col, Container, Row } from '../components/blocks/Blocks';
import * as colors from '../theme/colors';

export default function CreatePool() {
  const currencies = [
    { title: 'ETH', subTitle: 'Ethereum' },
    { title: 'BTC', subTitle: 'Bitcoin' },
    { title: 'USDT', subTitle: 'Tether' },
    { title: 'SOL', subTitle: 'Solana' },
    { title: 'ABT', subTitle: 'Arcblock' },
    { title: 'GTS', subTitle: 'GT STAR' },
  ]
  return (
    <>
      <Navigationbar />
      <Container className="h-100">
        <Row>
          <Col size='6' className="mx-auto my-auto">
            <H1 color={colors.primary}>Public Pool</H1>
            <Row className='flex-column mb-3'>
              <Col className='mt-3'><H3>• Anyone can add liquidity</H3></Col>
              <Col className='mt-3'><H3>• Parameters cannot be modified after creation</H3></Col>
            </Row>
            <H1 color={colors.primary}>Standard</H1>
            <Row className='flex-column'>
              <Col className='mt-3'><H3>• 50/50 value liquidity provision (same as Uniswap)</H3></Col>
              <Col className='mt-3'><H3>• More parameters can be set</H3></Col>
            </Row>
          </Col>
          <Col size='6' className='pt-5'>
            <Form className="px-4 py-4 my-5">
              <Row>
                <Col size='12' className="my-2">
                  <Title variant={'dark'} value={'Create a pool'} ></Title>
                </Col>
                <Col size='12' className="my-2">
                  <Row className='mb-2'><B1 className="form-check-label">01 Choose Pool Type</B1></Row>
                  <ButtonGroupRadio className='col-md-12'
                    name='publicPool' checked='Public Pool'
                    disabled={['Private Pool', 'Pegged Pools']}
                    values={['Public Pool', 'Private Pool', 'Pegged Pools',
                    ]} />
                </Col>
                <Col size='12' className="my-2">
                  <Row className='mb-2'><B1 className="form-check-label">02 Choose Pool Template</B1></Row>
                  <ButtonGroupRadio className='col-md-12'
                    name='peggedPool' checked='Standard'
                    disabled={['Single Token', 'Custom']}
                    values={['Standard', 'Single Token', 'Custom',
                    ]} />
                </Col>

                <Col size='12' className="my-2">
                  <DropdownInput
                    label='Quote Token Amount'
                    searchable={true}
                    items={currencies}
                    value={{ title: 'Eth' }}
                    inputType='number'
                    placeholder='0'
                    className="mb-4 mt-4"
                  />
                  <Row><B1 className="text-center">+</B1></Row>
                  <DropdownInput
                    label='Base Token Amount'
                    searchable={true}
                    items={currencies}
                    value={{ title: 'USDT' }}
                    inputType='number'
                    placeholder='0'
                    className='mb-4'
                    disabled='disabled'
                  />
                </Col>
                <Col size='12' className="my-2">
                  <B1 className="form-check-label" >04 Parameters</B1>
                  <Row>
                    <Col size='3' className="my-auto">
                      <B1 className="" >Fee Rate (%)</B1>
                    </Col>
                    <Col size="9">
                      <FormInput className="w-100" placeholder="(0%, 10%)" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center mx-5 mt-3 pt-3">
                <Button type="submit" label={'Create Pool'} primary />
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </>
  )
}
