import React, { useContext, useReducer, useEffect, useState } from "react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/Images/avatar.png";
import hearticon from "../../assets/Images/hearticon.png";
import comment from "../../assets/Images/comment.png";
import delet from "../../assets/Images/delete.png";
import addFriend from "../../assets/Images/add-friend.png";
import { AuthContext } from "../AppContext/AppContext";
import { PostsReducer, postActions, postStates } from "../AppContext/PostReducer";
import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  arrayUnion,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";


const PostCard = ({ uid, id, logo, name, email, text, image, timestamp }) => {
  const { user} = useContext(AuthContext);
  const [state, dispatch] = useReducer(PostsReducer, postStates);
  const likesRef = doc(collection(db, "posts", id, "likes"));
  const likesCollection = collection(db, "posts", id, "likes");
  const { ADD_LIKE, HANDLE_ERROR } = postActions;
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };


 const addUser = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].ref;
      await updateDoc(data, {
        friends: arrayUnion({
          id: uid,
          image: logo,
          name: name,
        }),
      });
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };

  const handleLike = async (e) => {
    e.preventDefault();
    const q = query(likesCollection, where("id", "==", user?.uid));
    const querySnapshot = await getDocs(q);
    const likesDocId = await querySnapshot?.docs[0]?.id;
    try{
      if (likesDocId !== undefined) {
        const deleteId = doc(db, "posts", id, "likes", likesDocId);
        await deleteDoc(deleteId);  
      } else {
        await setDoc(likesRef, {
          id: user?.uid,
        });
      }
    } catch(err){
      alert(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getLikes = async () => {
      try {
        const q = collection(db, "posts", id, "likes");
        await onSnapshot(q, (doc) => {
          dispatch({type: ADD_LIKE, likes: doc.docs.map((item) => item.data()),
          });
        });
      } catch(err){
        dispatch({type: HANDLE_ERROR});
      alert(err.message);
      console.log(err.message);
      }
    };
    return () => getLikes();
  }, [id, ADD_LIKE, HANDLE_ERROR]);


  return (
    <div className="mb-4">
      <div className="flex flex-col py-4 bg-white rounded-t-3xl">
        <div className="flex items-center pb-4 ml-2">
          <Avatar
            size="sm"
            variant="circular"
            alt="avatar"
            src={logo || avatar}
          ></Avatar>
          <div className="flex flex-col">
            <p className="ml-4 py-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              {email}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="ml-4 py-2 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
              Published:{timestamp}
            </p>
          </div>
          {user?.uid !== uid && <div onClick={addUser} className="w-full flex justify-end cursor-pointer mr-10">
            <img className="h-10 mr-4 hover:bg-blue-100 rounded-xl p-2" src={addFriend} alt="addFriend"></img></div>}
        </div>
        <div>
          <p className="ml-4 pb-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            {text}
          </p>
        </div>
        {image && (
          <img className="h-[500px] w-full" src={image} alt="post"></img>
        )}
      </div>
      <div className="flex justify-around items-start pt-4">
        <button className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100" onClick={handleLike}>
          <img className="h-8 mr-4" src={hearticon} alt="like" />
          {state.likes?.length > 0 && state?.likes?.length}
        </button>
        <div className="flex items-center cursor-pointer rounded-lg p-2 hover:bg-gray-100">
          <div className="flex items-center cursor-pointer">
            <img className="h-8 mr-4" src={comment} alt="comment" />
            <p className="font-roboto font-medium text-md text-gray-700  no-underline tracking-normal leading-none">
              comments
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <img className="h-8 mr-4" src={delet} alt="delete" />
          <p className="font-roboto font-medium text-md text-gray-700  no-underline tracking-normal leading-none">
            delete
          </p>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
