import React from 'react'
import { Query } from 'react-apollo';

import { HOME_PAGE } from './queries';

export default () => {
    return (
        <Query query={HOME_PAGE}>
            {
                ({loading, data, error}) => {
                    if(loading)
                        return <span>Loading</span>;
                    
                    if(error)
                        return <span>Something happened</span>;

                    if(data) {
                        console.log(data);
                        return <span>YEYZ</span>;
                    }
                }
            }
        </Query>
    )
}
