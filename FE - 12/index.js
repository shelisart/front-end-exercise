import helloWorld from "./helloWorld.js";
import ambilDataUserAsync from "./ambilDataUserAsync.js";
import ambilDataUser from "./ambilDataUser.js";

const messages = async()=> {
    msg = await helloWorld();
    console.log(msg);
}

messages()
ambilDataUser()
ambilDataUserAsync()

