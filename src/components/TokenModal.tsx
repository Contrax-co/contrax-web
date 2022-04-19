import React, { useEffect, useState } from 'react';
import { getCurrencies, storeCurrencies } from '../store/localstorage';
import { Col, Row } from './blocks/Blocks';
import { ListSubTitle, StyledListBtn } from './form/dropdownInput/DropdownInput.styles';
import { FormInput } from './form/Form';
import { Image } from './image/Image';
import { Modal } from './modal/Modal';
import { Desc, DescSpan } from './text/Text';

const url = 'https://gateway.ipfs.io/ipns/tokens.uniswap.org';

const TokenModal = ({id, onSelection}: any) => {

  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    // Get various currencies from the server
    (async () => {
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
    })();
  }, []);

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