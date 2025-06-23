import axios from 'axios';
import { reactive } from 'vue';

export default function () {
    let doglist = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    async function getDog() {
        try {
            let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
            console.log(result.data)
            doglist.push(result.data.message)
        } catch (e) {
            alert(e)
        }
    }
    //向外部提供东西
    return {doglist,getDog}
}