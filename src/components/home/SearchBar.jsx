import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			if (searchQuery.trim() !== '') {
				navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
			}
		}
	};

	return (
		<div className='w-full relative container mb-5'>
			<input
				type='text'
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder='Search any car'
				className='bg-white border border-neutral/20 w-full rounded-xl px-[4rem] lg:mr-[10.2rem] py-4 focus:outline-none focus:border-primary focus:border'
			/>
			<FaSearch className='absolute text-neutral top-[21px] left-12 lg:left-[2.5rem]' />
		</div>
	);
};

export default SearchBar;
