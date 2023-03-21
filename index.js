import axios from 'axios'

(async() => {
    const {data : user1} = await axios("https://jsonplaceholder.typicode.com/users/1"); 
    console.log(user1)

    const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts/1")
    console.log("posts:" , posts)
})();
