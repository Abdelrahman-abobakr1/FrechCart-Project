import { toast } from "sonner";
import { sendUserDataLogin } from "./signIn.action";

export default async function sendUserLogin(data: any) {

    const message = await sendUserDataLogin(data)
    return message
}
