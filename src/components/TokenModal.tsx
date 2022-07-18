import React, { useEffect, useState } from 'react';
import { getCurrencies, getUserSession, storeCurrencies } from '../store/localstorage';
import { main } from '../utils/constants';
import { tokenApiEndpoint } from '../utils/url';
import { Col, Row } from './blocks/Blocks';
import { ListSubTitle, StyledListBtn } from './form/dropdownInput/DropdownInput.styles';
import { FormInput } from './form/Form';
import { Image } from './image/Image';
import { Modal } from './modal/Modal';
import { Desc, DescSpan } from './text/Text';

const url = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';

const TokenModal = ({ id, onSelection, standardTokens = true }: any) => {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    // Get various currencies from the server
    (async () => {
      if (standardTokens) {
        const currencies = await getCurrencies();
        if (currencies?.length == 0) {
          fetch(url)
            .then(res => res.json())
            .then((response): any => {
              console.log(response.tokens);
              storeCurrencies(response.tokens);
              setTokens(response.tokens);
            })
            .catch(err => alert(err));
        } else {
          console.log("currencies are already fetched", currencies);
          setTokens(currencies);
        }
      } else {
        let walletData: any;
        const sessionData = getUserSession();
        if (sessionData) {
          walletData = JSON.parse(sessionData)
          getTokensList(walletData.address);
        }
      }
    })();
  }, []);

  const getTokensList = (address: string) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': main.xApiKey,
        'Access-Control-Allow-Origin': '*'
      }
    };
    fetch(`${tokenApiEndpoint}/${address}/erc20?chain=rinkeby`, requestOptions)
      .then(response => response.json())
      .then(res => {
        if (res) {
          console.log("TokenList",res);
          setTokens(res)
          return;
        }
        console.log('no res.data reveived');
      });
  }

  return (
    <Modal id={id} title='Select a token'
      closeLabel=''
      okLabel=''
    >
      <Row className="my-2">
        <Col size='12' className="mb-1">
          <FormInput name='searchCurrency' caption='' placeholder='Search' />
          <div className='tokenModal-content'>
            {tokens.map((item: any) => {
              return (
                <Row className='my-4' data-bs-dismiss="modal" onClick={() => { onSelection(item) }}>
                  <Col size='1'>
                    <Image src={item.logoURI} width='32' height='32' alt={item.name} />
                  </Col>
                  <Col size='11'>
                    <StyledListBtn
                      className="dropdown-item"
                      data-bs-dismiss="modal" >
                      {item.name}
                    </StyledListBtn>
                  </Col>
                </Row>
              )
            })}
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default TokenModal;