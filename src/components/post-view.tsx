import dayjs from "dayjs";
import Link from "next/link";
import { type RouterOutputs } from "~/utils/api";
import Image from "next/image";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = ({ post }: { post: PostWithUser }) => {
  return (
    <div className="flex items-center gap-4 border-b border-slate-400 p-4">
      <Image
        src={post.author.profileImageUrl}
        alt="Profile picture"
        className="h-14 w-14 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 text-slate-300">
          <Link href={`/@${post.author.username}`}>
            <span className="font-bold">{`@${post.author.username}`}</span>
          </Link>
          <span>&#183;</span>
          <Link href={`/post/${post.id}`}>
            <span>{dayjs(post.createdAt).fromNow()}</span>
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};
