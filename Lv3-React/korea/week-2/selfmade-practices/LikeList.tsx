import { useState } from "react";

// ==========================================
// 4. Like/Heart List (좋아요 버튼 토글)
// ==========================================
/**
 * Components: PostList (Parent), Post (Child)
 * Requirements:
 * - Parent stores: Array of posts { id, title, isLiked }
 * - Child receives: post object, onToggleLike function
 * - Child action: Clicking "Like/Unlike" flips the boolean value of that specific post
 */

type PostData = {
  id: number;
  title: string;
  isLiked: boolean;
}

const Post = (props: {
  post: PostData;
  onToggleLike: (id:number)=>void;
}) => {
  const {post, onToggleLike} = props;
  return <button onClick = {()=>onToggleLike(post.id)}>Like/Unlike</button>; };

export const PostList = () => { 
  const [posts, setPosts] = useState<PostData[]>([
    { id: 1, title: "React 상태 관리 완벽 정리", isLiked: false },
    { id: 2, title: "오늘 점심 메뉴 추천 좀", isLiked: true },
    { id: 3, title: "TypeScript 타입 지정 꿀팁", isLiked: false }
  ]);
  const flipLike = (id:number) => {
    setPosts(posts.map((post)=>(post.id === id ? {...post, isLiked: !post.isLiked }: post)))
  }
  return(
  <div className="flex flex-col justify-content gap-5 py-10 bg-slate-200">
    {posts.map((post)=>(
      <div key={post.id} className="flex flex-col justify-center items-center gap-5 py-5">
        <span>{post.title}</span>
        <Post post = {post} onToggleLike = {(id)=>flipLike(id)}/>
        {post.isLiked ? <span>Liked</span> : <span>Disliked</span>}
      </div>
    ))}
  </div>
  ); };