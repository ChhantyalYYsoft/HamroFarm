import { query, collection,where, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/config";
import { DB_NAMES } from "../../utils";
import { setProductList } from "./productSlice";

export const getProductsByCategorytAction = () => async (dispatch) => {
    try {
        const querySnapshot = await getDocs(collection(db, DB_NAMES.PRODUCT));
        const productList = [];
        querySnapshot.forEach(doc => {
            const slug = doc.id;
            const data = doc.data()
            productList.push({
                ...data,
                slug
            })
        })
        dispatch(setProductList(productList))
    } catch (e) {
        toast.error(`Something went wrong ${e.message}`)
    }
}