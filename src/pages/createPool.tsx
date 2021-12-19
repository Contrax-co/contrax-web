import React from 'react'
import Navigationbar from '../components/Navigationbar/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { PageTitle, Title, Desc } from "../components/text/Text";
import Button, { ButtonGroupRadio } from "../components/button/Button";
import { Form, FormInput } from "../components/form/Form";
import DropdownInput from '../components/form/dropdownInput/DropdownInput';
import { Col, Container, Row } from '../components/blocks/Blocks';

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
          <Col size='6' className="mx-auto my-auto h-100">
            <PageTitle value={'Public Pool'} variant={'dark'} />
            <Title value={'• Anyone can add liquidity'} variant={'dark'} />
            <Title value={'• Parameters cannot be modified after creation'} variant={'dark'} className="mb-4" />
            <PageTitle value={'Standard'} variant={'dark'} />
            <Title value={'• 50/50 value liquidity provision (same as Uniswap)'} variant={'dark'} />
            <Title value={'• More parameters can be set'} variant={'dark'} />
          </Col>
          <Col size='6'>
            <Form className="px-4 py-4 my-5">
              <Row>
                <Col size='12' className="my-2">
                  <Title variant={'dark'} value={'Create a pool'} ></Title>
                </Col>
                <Col size='12' className="my-2">
                  <Desc className="form-check-label" value={'01 Choose Pool Type'} variant={'dark'} />
                  <ButtonGroupRadio className='col-md-12'
                    name='publicPool' checked='Public Pool'
                    disabled={['Private Pool', 'Pegged Pools']}
                    values={['Public Pool', 'Private Pool', 'Pegged Pools',
                    ]} />
                </Col>
                <Col size='12' className="my-2">
                  <Desc className="form-check-label" value={'02 Choose Pool Template'} variant={'dark'} />
                  <ButtonGroupRadio className='col-md-12'
                    name='peggedPool' checked='Standard'
                    disabled={['Single Token', 'Custom']}
                    values={['Standard', 'Single Token', 'Custom',
                    ]} />
                </Col>

                <Col size='12' className="my-2">
                  <Desc className="form-check-label" value={'03 Supply Initial Tokens'} variant={'dark'} />
                  <DropdownInput
                    label='Quote Token Amount'
                    searchable={true}
                    items={currencies}
                    value={{ title: 'Eth' }}
                    inputType='number'
                    placeholder='0'
                    className="mb-4 mt-4"
                  />
                  <Desc className="text-center" value={'+'} variant={'dark'} />
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
                  <Desc className="form-check-label" value={'04 Parameters'} variant={'dark'} />
                  <Row>
                    <Col size='3' className="my-auto">
                      <Desc className="" value={'Fee Rate (%)'} variant={'dark'} />
                    </Col>
                    <Col size="9">
                      <FormInput className="w-100" placeholder="(0%, 10%)" />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center mx-5 mt-3">
                <Button type="submit" label={'Create'} variant="primary" />
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </>
  )
}
