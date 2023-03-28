import axios from 'axios'

// axios await async kullanarak API üzerinden verileri çekmek;

 const getData = async (number) =>  {
    const {data : user1} = await axios("https://jsonplaceholder.typicode.com/users/" + number); 
    console.log(user1)

    const {data : posts} = await axios("https://jsonplaceholder.typicode.com/posts/" + number)
    console.log("posts:" , posts)
};
export default getData;

