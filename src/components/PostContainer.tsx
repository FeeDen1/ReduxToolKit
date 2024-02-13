import React, {FC} from 'react';
import {postAPI, useFetchAllPostsQuery} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [removePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    const handleRemove = (post:IPost) => {
        removePost(post)
    }

    const handleUpdate = (post:IPost) => {
        updatePost(post)
    }

    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(15)
    return (
        <div>
            <div className={'post__list'}>
                <button onClick={handleCreate}>Добавить новую запись</button>
                {isLoading && <h1>Идет загрузка</h1>}
                {error && <h1>Ошибка при загрузке данных</h1>}
                {posts && posts.map( post =>
                    <PostItem key={post.id} post={post} update={handleUpdate} remove={handleRemove}/>
                )}
            </div>
        </div>
    );
};

export default PostContainer;