import React, { useState, useContext } from 'react';

export const FeedContext = React.createContext({});

export const useIsFeedIsConnected = () => {
	//! Hook à utiliser pour donner des droits à un user
	const { feed } = useContext(FeedContext);
	return feed === true;
};

export default function FeedProvider(props) {
	const [feed, Buttonprofile] = useState(true);

	console.log(feed);

	return (
		<FeedContext.Provider value={{ feed, Buttonprofile }}>
			{props.children}
		</FeedContext.Provider>
	);
}