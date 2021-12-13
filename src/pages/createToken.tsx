import Navigationbar from '../components/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { PageTitle, Title, Desc, DescSpan } from "../components/text/Text";
import { FormInput, FormCheckbox, Form } from "../components/form/Form";
import Button from "../components/button/Button";
import { useInput } from "rooks";
import { Col, Container, Row } from '../components/blocks/Blocks';
import { Modal } from '../components/modal/Modal';

export default function CreateToken(props: any) {
  const tokenSymbol = useInput('');
  const tokenSupply = useInput('');
  const tokenName = useInput('');
  const tokenDecimal = useInput('');
  const tokenBurn = useInput(false);
  const tokenBurnValue = useInput('');
  const tokenTradingFee = useInput(false);
  const tokenTradingFeeValue = useInput('');
  const tokenSupportSupplyIncrease = useInput(false);
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    alert(`Submitting Form ${tokenSymbol} ${tokenSupply}`);
    // reset();
  }
  return (
    <>
      <Navigationbar />
      <Container className="h-100">
        <Row>
          <Col size='6' className="mx-auto my-auto">
            <PageTitle value={'No coding required. '} variant={'dark'} />
            <PageTitle value={'Create your own tokens with one click!'} variant={'dark'} />
          </Col>
          <Col size='6' >
            <Form onSubmit={handleSubmit} className="px-4 py-4 my-5">
              <Row className="row">
                <Col size='12' className="my-2">
                  <Title variant={'dark'} value={'Enter Token Parameters:'} ></Title>
                </Col>
                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="1-16 Characters" label={'Token Symbol'} {...tokenSymbol} />
                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="0-99,999,999,999,999,999" label={'Token Supply'} {...tokenSupply} />

                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="1-64 Characters" label={'Token Name'} {...tokenName} />
                <FormInput className="col-lg-6 col-md-6 col-sm-6" placeholder="0-18" label={'Decimals'} {...tokenDecimal} />

                <Col size='12' className="mt-3 mb-2">
                  <Title variant={'dark'} value={'Special Features:'}></Title>
                </Col>
                <Col className="col-lg-10 col-md-10 col-sm-10 my-2">
                  <FormCheckbox className='col-lg-10 col-md-10 col-sm-10 my-2' label='Burn' {...tokenBurn} />
                  <Desc className="form-check-label" value={'A percentage of tokens will be sent to the burn address for each on-chain transfer'} variant={'dark'} />
                </Col>
                <FormInput className="col-lg-2 col-md-2 col-sm-2 my-2" placeholder="0.1%" id="burnPercent" name="burnPercent" {...tokenBurnValue} />
                <Col className="col-lg-10 col-md-10 col-sm-10 my-2">
                  <FormCheckbox id="exampleCheck1" label='Trading Fees' {...tokenTradingFee} />
                  <Desc className="form-check-label" value={'A percentage of tokens will be sent to the creators address for each on-chain transfer'} variant={'dark'} />
                </Col>
                <FormInput className="col-lg-2 col-md-2 col-sm-2 my-2" placeholder="0.1%" id="tradingFeePercent" name="tradingFeePercent" {...tokenTradingFeeValue} />
                <Col size='12' className="my-2">
                  <FormCheckbox id="exampleCheck1" label='Supports Supply Increase' {...tokenSupportSupplyIncrease} />
                  <Desc className="form-check-label" value={'Allows the creator to issue additional tokens after the token creation'} variant={'dark'} />
                </Col>
              </Row>
              <Row className="justify-content-center mx-5 mt-3">
                <a href='/#' data-bs-toggle="modal" data-bs-target="#PrevieCreateToken" className="row justify-content-center">
                  <Button type="submit" label={'Connect Wallet'} variant="primary" />
                </a>
              </Row>
            </Form>
          </Col>
          <Title className="mt-5" value={'My Token List'} variant={'dark'} />
          {/* List Of Tokens Previously Created By The Logged-in User - Start */}
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="table-dark">
                  <th>#</th>
                  <th>Token Symbol</th>
                  <th>Token Name</th>
                  <th>Total Supply</th>
                  <th>Holders</th>
                  <th>Balance</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>SOL</td>
                  <td>Solana</td>
                  <td>1,000,000,000,000</td>
                  <td>7,000</td>
                  <td>678,987</td>
                  <td>
                    <a className="btn btn-primary" href="/manage-token">Manage</a>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Rune</td>
                  <td>Thor coin</td>
                  <td>1,000,000,000</td>
                  <td>15,000</td>
                  <td>788,334</td>
                  <td>
                    <a className="btn btn-primary" href="/manage-token">Manage</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Row>
      </Container>
      {/* List Of Tokens Previously Created By The Logged-in User - End */}
      <BottomBar />

      <Modal id="PrevieCreateToken" title='Token Create Confirmation'
        closeLabel='Continue Editing'
        okLabel='Deploy / Finish'
      >
        <Row className="my-2">
          <Desc value={'Token Symbol: ' + tokenSymbol.value} variant={'dark'} className="mb-3" />
          <Desc value={'Token Supply: ' + tokenSupply.value} variant={'dark'} className="mb-3" />
          <Desc value={'Token Name: ' + tokenName.value} variant={'dark'} className="mb-3" />
          <Desc value={'Decimals: ' + tokenDecimal.value} variant={'dark'} className="mb-3" />
          <Col size='12' className="mb-3">
            <DescSpan value={'Burn: '} variant={'dark'} />
            {
              tokenBurn.value === false ? (
                <DescSpan value={'No'} variant={'dark'} />
              ) : (
                <DescSpan value={'Yes - ' + tokenBurnValue.value + ' %'} variant={'dark'} />
              )
            }
          </Col>
          <Col size='12' className="mb-3">
            <DescSpan value={'Trading Fees: '} variant={'dark'} />
            {
              tokenTradingFee.value === false ? (
                <DescSpan value={'No'} variant={'dark'} />
              ) : (
                <DescSpan value={'Yes - ' + tokenTradingFeeValue.value + ' %'} variant={'dark'} />
              )
            }
          </Col>
          <Col size='12' className="mb-3">
            <DescSpan value={'Supports Supply Increase: '} variant={'dark'} />
            {
              tokenSupportSupplyIncrease.value === false ? (
                <DescSpan value={'No'} variant={'dark'} />
              ) : (
                <DescSpan value={'Yes'} variant={'dark'} />
              )
            }
          </Col>
        </Row>
      </Modal>

    </>
  )
}