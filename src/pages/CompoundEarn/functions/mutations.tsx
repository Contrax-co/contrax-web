import { gql, useMutation } from '@apollo/client';

export const ADD_WALLET = (pool:any, userWallet:any, depositedLP:any) => gql`
    mutation MyMutation {
        insert_${pool.lp_address}(objects: {
            userWallet: "${userWallet}",
            depositedLP: ${depositedLP}
        }){
            returning {
                userWallet
                depositedLP
            }
        }
    }
`;