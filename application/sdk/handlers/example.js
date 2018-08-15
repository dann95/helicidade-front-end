import post from '../presenters/post';
import posts from '../presenters/posts';

const example = http => {
    return {
        all() {
            return http.get('https://jsonplaceholder.typicode.com/posts')
                .then(posts)
        },
        find(id) {
            return http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(post)
        }
    }
}

export default example