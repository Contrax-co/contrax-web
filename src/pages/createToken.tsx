import Navigationbar from '../components/Navigationbar/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { Title, Desc, DescSpan, H1, H3, Link } from "../components/text/Text";
import { FormInput, FormCheckbox, Form } from "../components/form/Form";
import Button from "../components/button/Button";
import { useInput } from "rooks";
import { Col, Container, Row } from '../components/blocks/Blocks';
import { Modal } from '../components/modal/Modal';
import * as colors from '../theme/colors';
import { Image } from '../components/image/Image';
import createTokenImg from '../images/create-token.png';
import * as contractFile from '../erc20.json';

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

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    const metadata = contractFile;
    const factory = new ethers.ContractFactory(metadata.abi, metadata.bytecode, signer)

    let decimal = 18;
    let symbol = "TFRWMM";
    let mintable = true;
    let burnPercentage = 2;
    let initialSupply = 99999999999;
    let name = "TESTINGFROMREACTWITHMETAMASK";
    let transactionFeePercentage = 4;
    let burnPercantageIdentifier = true;
    let transactionFeePercentageIdentiier = true;

    const contract = await factory.deploy(name, symbol, decimal, initialSupply, burnPercentage, burnPercantageIdentifier,
      transactionFeePercentage, transactionFeePercentageIdentiier, mintable);

    await contract.deployed();
    alert("Follow the contract deployment status in metamask");
  }

  return (
    <>
      <Navigationbar />
      <Container className="h-100">
        <Row>
          <Col size='4' >
            <Row height='50px' />
            <Row><H1 color={colors.primary}>No coding required.</H1></Row>
            <Row><H1 color={colors.primary}>Create your own tokens with one click!</H1></Row>
            <Image src={createTokenImg} alt='create-token' width='416' height='261' />
          </Col>
          <Col size='8' >
            <Form onSubmit={handleSubmit} className="px-4 py-4 my-5">
              <Row className="row">
                <Col size='12' className="my-2">
                  <H3>Enter Token Parameters</H3>
                </Col>
                <FormInput className="col-lg-6 col-md-6 col-sm-6" caption="1-16 Characters" placeholder='Token Symbol' {...tokenSymbol} />
                <FormInput className="col-lg-6 col-md-6 col-sm-6" caption="0-99,999,999,999,999,999" placeholder={'Token Supply'} {...tokenSupply} />

                <FormInput className="col-lg-6 col-md-6 col-sm-6" caption="1-64 Characters" placeholder={'Token Name'} {...tokenName} />
                <FormInput className="col-lg-6 col-md-6 col-sm-6" caption="0-18" placeholder={'Decimals'} {...tokenDecimal} />

                <Col size='12' className="mt-3 mb-2">
                  <H3>Special Features</H3>
                </Col>
                <Col className="col-lg-10 col-md-10 col-sm-10 my-2">
                  <FormCheckbox className='col-lg-10 col-md-10 col-sm-10 my-2' label='Burn' {...tokenBurn} caption='A percentage of tokens will be sent to the burn address for each on-chain transfer' />
                </Col>
                <FormInput className="col-lg-2 col-md-2 col-sm-2 my-2 mt-5" placeholder="0%" id="burnPercent" name="burnPercent" {...tokenBurnValue} />
                <Col className="col-lg-10 col-md-10 col-sm-10 my-2">
                  <FormCheckbox id="exampleCheck1" label='Trading Fees' {...tokenTradingFee} caption='A percentage of tokens will be sent to the creators address for each on-chain transfer' />
                </Col>
                <FormInput className="col-lg-2 col-md-2 col-sm-2 my-2 mt-4" placeholder="0%" id="tradingFeePercent" name="tradingFeePercent" {...tokenTradingFeeValue} />
                <Col size='12' className="my-2">
                  <FormCheckbox id="exampleCheck1" label='Supports Supply Increase' {...tokenSupportSupplyIncrease} caption='Allows the creator to issue additional tokens after the token creation' />
                </Col>
              </Row>
              <Row className="justify-content-center mx-5 mt-3">
                <Button width='394px' data-bs-toggle="modal" data-bs-target="#" className="row justify-content-center mt-2 mb-2" type="submit" label={'Connect Wallet'} primary />
              </Row>
            </Form>
          </Col>
          <Title className="mt-5" value={'My Token List'} variant={'dark'} />
          {/* List Of Tokens Previously Created By The Logged-in User - Start */}
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr className="table-light">
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
                    <Link className="btn btn-text p-0" link="/manage-token">Manage</Link>
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
                    <Link className="btn btn-text p-0" link="/manage-token">Manage</Link>
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