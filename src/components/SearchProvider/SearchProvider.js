import React, { useState } from 'react';

export const SearchContext = React.createContext({});

export default function SearchProvider(props) {
	const [searchTerms, setSearchTerms] = useState('');

	return (
		<SearchContext.Provider
			value={{
				searchTerms,
				setSearchTerms,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
}
