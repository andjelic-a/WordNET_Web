import { defer } from "react-router-dom";
import { getWords } from "../../request_handler/ServerRequest";

export default async function homeLoader() {
    return defer({
        words: getWords(),
    });
}