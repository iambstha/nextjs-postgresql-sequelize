"use server"
import Item from "@/models/Item"

const deleteItem = async (id) => {
    try {
        await Item.destroy({
            where: {
                id: id
            }
        })
        console.log("Item succesfully deleted.")
    } catch (error) {
        console.log("Failed creating item.")
        throw Error
    }
}
export default deleteItem