import { defer } from "react-router-dom";
import { getWords } from "../../request_handler/ServerRequest";

export default async function archiveLoader() {
    return defer({
        words: getWords(),
    });
}