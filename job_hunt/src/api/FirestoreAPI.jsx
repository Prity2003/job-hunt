import { firestore } from "../firebaseconfig";
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { toast } from "react-toastify";

let dbRef = collection(firestore, 'posts')
let userRef = collection(firestore, 'users')

export const PostStatusDB = async (object) => {
    addDoc(dbRef, object)
    .then((res) => {
        alert("Post Added!");
        console.log("Post Added!", res);
        toast.success("Post Added!");
    })
    .catch((error) => {
        console.log(error)
    });
}

export const getPosts = (setAllStatus) => {
    onSnapshot(dbRef, (response) => {
        setAllStatus(
            response.docs.map((docs) => {
                return {...docs.data(), id: docs.id};
            })
        )
    });
}

export const postUserData = (object) => {
    addDoc(userRef, object)
    .then(()=> {})
    .catch((err) => {
        console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {

    let currEmail = localStorage.getItem('userEmail');
    onSnapshot(userRef, (response) => {
        setCurrentUser(
            response.docs.map((docs) => {
                return {...docs.data(), UserId: docs.id};
            }).filter((item) => {
                return item.email === currEmail;
            })
        )
    });
}