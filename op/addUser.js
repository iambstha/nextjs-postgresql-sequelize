"use server"
import { createuser } from "@/db/createUser"
const addUserOp = async (fname,lname) => {
    await createuser(fname,lname)
}

export default addUserOp