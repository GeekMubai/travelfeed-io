import '@babel/polyfill'
import Layout from '../components/MyLayout.js'
const { Client } = require('dsteem')
import dateFromJsonString from '../helpers/dateFromJsonString'
import marked from 'marked'

const client = new Client('https://api.steemit.com')

const Post = (props) => (
    <Layout>
        <h1>{props.blog.post.title}</h1>
        <p>{props.blog.post.image}</p>
        <p>{props.blog.post.tags}</p>
        <p>{props.blog.post.created}</p>
        <p>{props.blog.post.body}</p>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { author } = context.query
    const { permlink } = context.query

    const post = await client.call('condenser_api', 'get_content', [author, permlink])

    const json_date = '{ "date": "' + post.created + 'Z" }';
    const date_object = new Date(JSON.parse(json_date, dateFromJsonString).date);
    const created = date_object.toDateString();
    const json = JSON.parse(post.json_metadata);
    const image = json.image[0] ? 'https://steemitimages.com/1200x400/' + json.image[0] : 'https://steemitimages.com/640x640/https://cdn.steemitimages.com/DQmPmEJ5NudyR5Vhh5X36U1qY8FgM5iuaN1Smc5N55cr363/default-header.png';
    const tags = json.tags
    const body = marked(post.body)

    const blog = { post: { title: post.title, tags: tags, created: created, image: image, body: body } }

    return { blog }
}

export default Post