import { useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import SearchInput from '../search-input/SearchInput';
import Posts from '../posts/Posts';

import { ReactComponent as Logo  } from '../../assets/logo.svg';

import { search } from '../../api-calls/search';

import './Search.css';

interface FormValues {
    redditSearch?: string,
};


const Search = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState<boolean | undefined>();

    const methods = useForm();

    const onSearch: SubmitHandler<FormValues> = (data) => {
        setLoading(true);
        search.redditSearch({ data })
            .then((res) => {
                setPosts(res.reddits);
            }).catch(e => {
                if (e.response) {
                    setError(e.response.data.error);      
                }
                setError(e.message);
            }).finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className='Search-container'>
            <header className='Header'>
                {/* <Logo width='400' height='158'/> */}
                <Logo className='Logo' />
                <div className='Input-container'>
                    <FormProvider {...methods}>
                        <form className='Form' onSubmit={methods.handleSubmit(onSearch)} autoComplete='off'>
                            <SearchInput />
                        </form>
                    </FormProvider>
                </div>
            </header>
            <div className='Posts-conatiner'>
                <Posts
                    error={error}
                    loading={loading}
                    posts={posts}
                />
            </div>
        </div>
    )
};

export default Search;
