import * as api from "../api";

// Actions creators
export const getPosts = () => async (dispatch: any) => {
  try {
    const { data }: any = await api.fetchPosts();
    const action = {
      type: "FETCH_ALL",
      payload: data,
    };
    dispatch(action);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: posts.ts ~ line 13 ~ getPosts ~ error",
      error.message
    );
  }
};

export const createPosts = (post: any) => async (dispatch: any) => {
  try {
    const { data }: any = await api.createPosts(post);
    const action = {
      type: "CREATE",
      payload: data,
    };
    dispatch(action);
  } catch (error: any) {
    console.log(
      "🚀 ~ file: posts.ts ~ line 29 ~ createPosts ~ error",
      error.message
    );
  }
};
