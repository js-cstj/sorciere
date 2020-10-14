import histoire from "./histoire.js";

export default class App {
    static main() {
        console.log(histoire);
    }
    
    static init() {
        window.addEventListener("load", e => {
            this.main();
        });
    }
}
App.init();