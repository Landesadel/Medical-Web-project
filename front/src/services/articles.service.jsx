import { axiosClassic } from '../api/interceptors';
import { getArticlesUrl } from '../config/api.config';

export const ArticleService = {
	async getAll(SearchTerm = null) {
		return axiosClassic
			.get(getArticlesUrl(''), {
				params: SearchTerm ? { SearchTerm } : {},
			})
			.then((res) => {
				const articles = [];
				for (let i in res?.data) {
					articles.push(res?.data[i]);
				}
				return articles;
			});
	},
};
