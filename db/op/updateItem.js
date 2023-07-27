"use server"
import Item from "@/models/Item"

const updateItem = async (name,price,id) => {
    try {
        await Item.update({name,price},{
            where: {
                id: id
            }
        })
        console.log("Item succesfully created.")
    } catch (error) {
        console.log("Failed creating item.")
        throw Error
    }
}
export default updateItem