import friends from '@utils/friends';
import Image from "next/image";
import Link from "next/link";

const Friends = () => {
  return (
    <span className="flex flex-wrap justify-evenly gap-3 pt-5 md:justify-normal md:gap-2.5 lg:gap-3">
        {friends.map((friend, key) => {
          return (
            <Link
              key={key}
              href={friend.link}
              title={`${friend.name}'s site`}
              target="_blank"
            >
              <Image
                className="h-[31px] w-[88px]"
                src={`/friends/${friend.image}`}
                alt={`Webring of ${friend.name}`}
                width={88}
                height={31}
              />
            </Link>
          );
        })}
      </span>
  )
}

export default Friends;