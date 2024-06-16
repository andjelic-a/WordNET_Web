import { defer } from "react-router-dom";
import { getFullWords } from "../../request_handler/ServerRequest";

export default async function archiveLoader() {
    return defer({
        words: getFullWords(),
    });
}