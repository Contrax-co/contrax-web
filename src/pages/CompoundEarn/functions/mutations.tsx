import { gql } from '@apollo/client';


export const POOLQUERY = (pool:any, poolQueryAddress:any) => gql`
query MyQuery {
    _${pool.lp_address}_by_pk (userWallet: "${poolQueryAddress}") {
    depositedLP
  }
}
`;


export const ADD_WALLET = (pool:any, userWallet:any, depositedLP:any) => gql`
    mutation MyMutation {
        insert__${pool.lp_address}(objects: {
            userWallet: "${userWallet}",
            depositedLP: ${depositedLP},
            earnedLP: 0,
            poolSharePercentage: 0
        }){
            returning {
                userWallet
                depositedLP
            }
        }
    }
`;

export const UPDATE_WALLET = (pool:any) => gql`
    mutation MyMutation ($userWallet: String, $depositedLP: Real) {
        update__${pool.lp_address}(where: {userWallet: {_eq: $userWallet}}, _set: {depositedLP: $depositedLP}) {
            returning {
              depositedLP
            }
          }
    }
`; 