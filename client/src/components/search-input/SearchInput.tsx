import { useFormContext } from "react-hook-form";

import { ReactComponent as Search } from '../../assets/search.svg'

import './SearchInput.css';


const SearchInput = () => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={errors.redditSearch ? 'Input-wrapper-error' : 'Input-wrapper'} >
            <Search style={{ opacity: 0.5 }} />
            <input
                id='reddit-search'
                type='text'
                className='Input'
                placeholder='Search Reddit'
                {...register('redditSearch', { required: true })}
            />
        </div>
    )
};

export default SearchInput;
