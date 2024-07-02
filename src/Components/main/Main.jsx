import { Avatar } from "@material-tailwind/react";
import PostCard from "./PostCard";
import avatar from "../../assets/Images/avatar.png";

import addimg from "../../assets/Images/addimg.png";
import { Button } from "@material-tailwind/react";
import { useRef, useState, useContext, useReducer, useEffect } from "react";
import { AuthContext } from "../AppContext/AppContext";
import { Alert } from "@material-tailwind/react";
import {
  doc,
  onSnapshot,
  setDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import {
  PostsReducer,
  postActions,
  postStates,
} from "../AppContext/PostReducer";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Main = () => {
  const { user, userData } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const text = useRef("");
  const collectionRef = collection(db, "posts");
  const postRef = doc(collection(db, "posts"));
  const document = postRef.id;
  const [state, dispatch] = useReducer(PostsReducer, postStates);
  const { SUBMIT_POST, HANDLE_ERROR } = postActions;
  const [progressBar, setProgressBar] = useState(0);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    if (text.current.value !== "") {
      try {
        await setDoc(postRef, {
          documentId: document,
          uid: user?.uid || userData?.uid,
          logo: user?.photoURL,
          name: user?.displayName || userData?.name,
          email: user?.email || userData?.email,
          text: text.current.value,
          image: image,
          timestamp: serverTimestamp(),
        });
        text.current.value == "";
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    } else {
      dispatch({ type: HANDLE_ERROR });
    }
  };

  const storage = getStorage();

  const metadata = {
    contentType: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ],
  };

  const submitImage = async () => {
    const fileType = metadata.contentType.includes(file["type"]);
    if (!file) return;
    if (fileType) {
      try {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(
          storageRef,
          file,
          metadata.contentType
        );
        await uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgressBar(progress);
          },
          (error) => {
            alert(error);
          },
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (downloadURL) => {
                setImage(downloadURL);
              }
            );
          }
        );
      } catch (err) {
        dispatch({ type: HANDLE_ERROR });
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    const postData = async () => {
      const q = query(collectionRef, orderBy("timestamp", "desc"));
      await onSnapshot(q, (doc) => {
        dispatch({
          type: SUBMIT_POST,
          posts: doc?.docs?.map((item) => item?.data()),
        });
        setImage(null);
        setFile(null);
        setProgressBar(0);
      });
    };
    return () => postData();
  }, [SUBMIT_POST]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
        <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
          <Avatar
            size="sm"
            variant="circular"
            src={user?.photoURL || avatar}
            alt="avatar"
          ></Avatar>
          <form className="w-full" onSubmit={handleSubmitPost}>
            <div className="flex justify-between items-center">
              <div className="w-full ml-4 ">
                <input
                  type="text"
                  name="text"
                  placeholder={"What's on your mind?"}
                  className="outline-none w-full bg-white rounded-md"
                  ref={text}
                />
              </div>
              <div className="mx-4">
                {" "}
                {image && (
                  <img className="h-24" src={image} alt="preview"></img>
                )}
              </div>
              <div className="mr-4">
                <Button variant="text" type="submit">
                  Share
                </Button>
              </div>
            </div>
          </form>
        </div>
        <span
          style={{ width: `${progressBar}%` }}
          className="bg-blue-700 py-1 rounded-md"
        ></span>
        <div className="flex justify-around items-center pt-4">
          <div className="flex items-center">
            <label
              htmlFor="addimg"
              className=" cursor-pointer flex items-center"
            >
              <img className="h-10 mb-3 mr-2" src={addimg} alt="add" />
              <input
                id="addimg"
                type="file"
                style={{ display: "none" }}
                onChange={handleUpload}
              />
            </label>
            {file && (
              <Button variant="text" onClick={submitImage}>
                Upload
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col py-4 w-full">
        {state.error ? (
          <div className="flex justify-center items-center">
            <Alert color="red"> something went wrong </Alert>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {state.posts.length > 0 &&
          state?.posts?.map((post, index) => {
            return (
              <PostCard
                key={index}
                logo={post.logo}
                id={post?.documentId}
                uid={post?.uid}
                name={post.name}
                email={post.email}
                text={post.text}
                image={post.image}
                timestamp={new Date(post?.timestamp?.toDate())?.toUTCString()}
              ></PostCard>
            );
          })}
      </div>
    </div>
  );
};

export default Main;
