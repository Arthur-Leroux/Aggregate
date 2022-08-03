import React, { useState } from 'react';
import initialArticles from '../assets/data/dummyData';

export const ArticlesContext = React.createContext({});

export default function ArticlesProvider(props) {
	const [articles, setArticles] = useState(initialArticles);

	const createArticle = article => {
		setArticles([...articles, article]);
	}

	const deleteArticle = articleId => {
		setArticles(articles.filter(article => article.id !== articleId));
	}

	return (
		<ArticlesContext.Provider value={{ articles,  createArticle, deleteArticle }}>
			{props.children}
		</ArticlesContext.Provider>
	);
}
