

import { createClient} from 'next-sanity';
import { projectId } from '../env';


const client = createClient({
    projectId:"9074oi3u",
    dataset:"production",
    apiVersion:"2023-01-01",
    useCdn:true,

})

export async function sanityFetch({query , params = {}} : {query : string, params? : any}) {
    return await client.fetch(query , params)
}
