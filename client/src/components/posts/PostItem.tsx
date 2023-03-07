import { Post } from './Posts'
import BInterweave from '../interweave/Interweave'

import { getDecodedString, isURL } from '../../utils/utils';

import './Posts.css'


const PostItem = ({ author, title, selftext, thumbnail, preview, url }: Post) => {

    const imageUrl = preview?.images[0].source.url
    const postImageUrl = imageUrl ? getDecodedString(imageUrl as string | '') : null

    return (
        <div className='PostItem-container'>
            <div className='Content-container'>
                <div className='Content-header'>
                    <div className='Header-text'>
                        <p className='Author'>Postet by {getDecodedString(author)}</p>
                        <h3 className='Title'>
                            <a className='Link' href={url} target="_blank" rel="noopener noreferrer">
                                <BInterweave content={getDecodedString(title as string | '')} />
                            </a>
                        </h3>
                    </div>
                    <div className='Thumbnail-container'>
                        {isURL(thumbnail as string | '') && <img className='Image' src={thumbnail} alt='thumbnail' width='138px' height='98px' />}
                    </div>
                </div>
                <p><BInterweave content={getDecodedString(selftext as string | '')} /></p>
                <div className='Image-container'>
                    {postImageUrl && <img className='Image' src={postImageUrl} alt='post' width='640px' />}
                </div>
            </div>
        </div>
    )
};

export default PostItem;
