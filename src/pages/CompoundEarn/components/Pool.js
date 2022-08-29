import { Col, Container, Row } from '../../../components/blocks/Blocks';
import Button from '../../../components/button/Button';

function Pool(pool) {
  const { id, name, token1_image, token2_image, apy, tvl, deposit } = pool;
  return (
    <div>
      <Container className=" mt-4 pt-1">
        <Row className="compound-card">
          <Col size="2"> {name} </Col>

          <Col size="3">
            APY
            <br />
            {apy}
          </Col>
          <Col size="2">
            TVL <br />
            {tvl}
          </Col>
          <Col size="2">
            Total Deposit <br />
            {deposit}
          </Col>
          <Col size="1">
            <Button size="sm" onClick={() => {}}>
              Deposit
            </Button>
          </Col>
          <Col size="1">
            <Button size="sm" onClick={() => {}}>
              Harvest
            </Button>
          </Col>
          <Col size="1">
            <Button
              primary
              size="sm"
              data-bs-toggle="modal"
              data-bs-target="#approvalModal"
              onClick={() => {}}
            >
              Withdraw
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Pool;
