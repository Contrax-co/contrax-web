import Pool from './Pool';

function PoolScreen({ pools }) {
  return (
    <div>
      {pools.map((pool) => (
        <Pool key={pool.id} pool={pool} />
      ))}
    </div>
  );
}

export default PoolScreen;
