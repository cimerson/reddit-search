import Loader from '../loader/Loader';
import PostItem from './PostItem';

import './Posts.css';

interface Image {
    url: string,
    width: number,
    height: number,
};

interface Images {
    source: Image,
    resolutions: Image[],
    variants?: any,
    id: string
};

export interface Post {
    author: string,
    title?: string,
    selftext?: string,
    thumbnail?: string,
    preview?: {
        enabled: boolean,
        images: Images[],
    },
    url?: string,
};

interface PostsProps {
    error: string,
    loading: boolean | undefined,
    posts: Post[]
}

const Posts = ({ error, loading, posts }: PostsProps) => {

    if (error) {
        return <h2 className='Error'>{error}</h2>
    };

    if (loading) {
        return <div className='Loading'><Loader /></div>
    };

    return (
        <ul className='List'>
            {
                posts?.map((post, i) => {
                    return (
                        <PostItem
                            key={i}
                            author={post.author}
                            title={post.title}
                            selftext={post.selftext}
                            thumbnail={post.thumbnail}
                            preview={post.preview}
                            url={post.url}
                        />
                    )
                })
            }
        </ul>
    )
}

export default Posts;
