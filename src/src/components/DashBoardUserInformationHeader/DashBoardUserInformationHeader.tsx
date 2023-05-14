import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import style from "./DashBoardUserInformationHeader.module.scss";

export default function DashBoardUserInformationHeader() {
  const { user } = useUser();

  return (
    <div className={style.userInformation}>
      {user ? (
        <>
          <Image
            width={36}
            height={36}
            src={user?.picture!}
            alt=""
            className={style.userProfilePhoto}
          />
          <h3 className={style.userName}>{user ? user.nickname : ""}</h3>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
