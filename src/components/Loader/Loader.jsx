import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const KEY = '29453797-0887d5f775e9db06cbb77fcb1';
const URL = 'https://pixabay.com/api/';

export const Loader = async (query, apiDataService, page) => {
  await axios
    .get(
      `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(res => {
      const {
        data: { hits, totalHits },
      } = res;
      apiDataService(hits, totalHits);
    })
    .catch(error => {
      toast.error(error.message);
    });
};

Loader.propTypes = {
  query: PropTypes.string.isRequired,
  apiDataService: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
};