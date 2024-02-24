import { query, collection, where, getDocs, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/config";
import { DB_NAMES } from "../../utils";
import { setProductList, setSelectedProduct } from "./productSlice";

export const getProductsAction = () => async (dispatch) => {
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
export const getProductsByCategorytAction = (category) => async (dispatch) => {
    try {
        console.log(category);
        const collectionRef = query(collection(db, DB_NAMES.PRODUCT), where('categorySlug', '==', category));
        const querySnapshot = await getDocs(collectionRef);
        const productList = [];
        querySnapshot.forEach((doc) => {
            const slug = doc.id;
            const data = doc.data()
            productList.push({
                ...data,
                slug
            })
        });

        dispatch(setProductList(productList))
    } catch (e) {
        toast.error(`Something went wrong ${e.message}`)
    }
}
export const getProductById = (id) => async (dispatch) => {
    try {
        const docRef = doc(db, DB_NAMES.PRODUCT, id);
        const docSnapPromise = getDoc(docRef);
        toast.promise(docSnapPromise, {
            pending: "In Progress"
        })
        const docSnap = await docSnapPromise;
        if (docSnap.exists()) {
            const productData = docSnap.data();
            console.log("Get", productData);
            dispatch(setSelectedProduct({ ...productData, id }))
            toast.success("Success")
        } else {
            toast.error("No book found")
        }
    } catch (e) {
        toast.error(e.message)
    }
}