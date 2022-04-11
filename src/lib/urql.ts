import { createClient, dedupExchange, fetchExchange, cacheExchange  } from 'urql'

const client = createClient({
    url: 'https://api-sa-east-1.graphcms.com/v2/cl1s8yyv25jmh01z7d56g8353/master',
    exchanges: [dedupExchange, cacheExchange, fetchExchange]
})

export {client}