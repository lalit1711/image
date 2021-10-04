import axios from "axios";

export function _getImages(keyword = "car", page = 1) {
	const url = `https://pixabay.com/api/?key=7949425-b5c9add2c6fbeb04776e858e6&q=${keyword}&image_type=photo&page=${page}`;
	return axios.get(url);
}
