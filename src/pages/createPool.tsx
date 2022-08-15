import React, { useEffect, useState } from 'react'
import Navigationbar from '../components/Navigationbar/Navigationbar';
import BottomBar from '../components/bottomBar/BottomBar';
import { Title, H1, H3, B1 } from "../components/text/Text";
import Button, { ButtonGroupRadio } from "../components/button/Button";
import { Form, FormInput } from "../components/form/Form";
import DropdownInput from '../components/form/dropdownInput/DropdownInput';
import TokenDrop from '../components/form/dropdownInput/tokenDrop';
import { Col, Container, Row } from '../components/blocks/Blocks';
import * as colors from '../theme/colors';
import { gql, useMutation, useQuery } from '@apollo/client';
import { getUserSession, setSelectedToken } from '../store/localstorage';
import abi from '../config/sushiswap.json';
import ercabi from '../config/erc20.json'
import { ethers } from "ethers"
import swal from 'sweetalert';
const axios = require('axios')



const FETCH = gql`
query MyQuery($chainId:String!,$userwallet:String!) {
    tokens(where: {chainId: {_like: $chainId}, userwallet: {_like: $userwallet}}) {
      userwallet
      totalSupply
      tokenaddress
      chainId
      decimal
      id
      tokenName
      tokenSymbol
    }
  }
  
`;




export default function CreatePool() {
  const { ethereum } = window;
  const [dtoken, setDTokens] = useState<any[]>([])
  const [wallet, setWallet] = useState()
  const [values, setValues] = useState([]);
  const [tokenA, setTokenA] = useState();
  const [tokenB, setTokenB] = useState();
  const [amountAvalue, setAmountA] = useState();
  const [amountBvalue, setAmountB] = useState();
  const { data, loading, error } = useQuery(FETCH, {
    variables: {
      chainId: "421611",
      userwallet: wallet
    },
  }
  );
  useEffect(() => {
    let walletData: any;
    let res: any;
    let sessionData = getUserSession();
    if (sessionData) {
      walletData = JSON.parse(sessionData);
      setWallet(walletData.address)
      const a = data;
      if (typeof (a) !== 'undefined') {
        console.log(a.tokens);
        setValues(a.tokens);
        console.log(values)
      }

    }

  })

  useEffect(() => {
    getApiDetails();
  }, [])


  const TokenAaddressA = async (item: any, isTokenA: boolean) => {
    console.log(item, isTokenA)
    setTokenA(item)
  }

  const TokenAaddressB = async (item: any, isTokenA: boolean) => {
    console.log(item, isTokenA)
    setTokenB(item)
  }

  const amountA = async (value: any) => {
    console.log(value)
    setAmountA(value)
  }
  const amountB = async (value: any) => {
    console.log(value)
    setAmountB(value)
  }



  const createPool = async () => {
 console.log(tokenA);
    console.log(tokenB);
    console.log(amountAvalue);
    console.log(amountBvalue);



    const contractAddress = "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506";
    const contractABI = abi;
    const tokenABI = ercabi.abi

    const tokenAddress: any = tokenA;
    const tokenAddressb: any = tokenB;

    const amount1:any = amountAvalue
    const amount2:any = amountBvalue

if(amount1 === amount2){
  const amount1min:any = amount1-1;
  const amount2min:any = amount2-1;

  const amountIn1 = ethers.utils.parseEther(amount1.toString());
  const amountIn2 = ethers.utils.parseEther(amount2.toString());

  const amount1Min = ethers.utils.parseEther(amount1min.toString());
  const amount2Min = ethers.utils.parseEther(amount2min.toString());

  const time = Math.floor(Date.now() / 1000) + 200000;
  const deadline = ethers.BigNumber.from(time);

   const userAddress = wallet;

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const router = new ethers.Contract(contractAddress, contractABI, signer);
  const TOKEN = new ethers.Contract(tokenAddress, tokenABI, signer);
  const TOKENB = new ethers.Contract(tokenAddressb, tokenABI, signer);

  await TOKEN.approve(contractAddress,amountIn1);
  await TOKENB.approve(contractAddress,amountIn2);



  const hx = await router.addLiquidity(tokenAddress, tokenAddressb, amountIn1,
    amountIn2,
    amount1Min,
    amount2Min, userAddress,deadline, {
    gasLimit: 250000
  });

const hash = hx.wait()
console.log(hash);

swal("Create Pool Transaction is in Process", "Please Follow Metamask ");
}else{
  swal("TokenA Amount  and TokenB Amount Should be same ");
}
}

   




  const getApiDetails = async () => {
    try {
      const result = await axios.post(
        'https://api.thegraph.com/subgraphs/name/sushiswap/arbitrum-exchange',
        {
          query: `
        {
          tokens{
            id
            name
            symbol
          }
        }
        `
        })
      // console.log(result.data.data.tokens)
      setDTokens(result.data.data.tokens)


    } catch (error) {
      console.error(error);
    }
  }

  console.log(dtoken)
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
                    items={dtoken}
                    onSelect={TokenAaddressA}
                    onToken={amountA}
                    value={{ title: 'Token A' }}
                    inputType='number'
                    placeholder='0'
                    className="mb-4 mt-4"
                  />
                  <Row><B1 className="text-center">+</B1></Row>
                  <TokenDrop
                    label='Base Token Amount'
                    searchable={true}
                    items={values}
                    onSelect={TokenAaddressB}
                    onToken={amountB}
                    value={{ title: 'Token B' }}
                    inputType='number'
                    placeholder='0'
                    className='mb-4'
                    disabled='disabled'
                  />
                </Col>
                <Col size='12' className="my-2">

                  {/* <Row>
                    <Col size='3' className="my-auto">
                      <B1 className="" >Amount </B1>
                    </Col>
                    <Col size="9">
                      <FormInput className="w-100" placeholder="Token1 Minimum" />
                    </Col>
                  </Row> */}
                  <br />
                  <Row>
                    {/* <Col size='3' className="my-auto">
                      <B1 className="" >Amount </B1>
                    </Col>
                    <Col size="9">
                      <FormInput className="w-100" placeholder="Token2 Minimum" />
                    </Col> */}
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center mx-5 mt-3 pt-3">
                <Button onClick={createPool} type="button" label={'Create Pool'} primary />
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <BottomBar />
    </>
  )
}
