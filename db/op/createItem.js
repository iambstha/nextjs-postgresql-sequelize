"use server"
import Item from "@/models/Item"

const createItem = async (name,price) => {
    try {
        await Item.create({name,price})
        console.log("Item succesfully created.")
    } catch (error) {
        console.log("Failed creating item.")
        throw Error
    }
}
export default createItem