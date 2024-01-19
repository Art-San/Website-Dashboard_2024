import Image from 'next/image'
import styles from './avatarUser.module.css'
// import { auth } from '@/lib/auth'

const AvatarUser = async ({ session }) => {
  // const user = await auth()
  const { user } = session
  // console.log('AvatarUser user ', user)
  // console.log('AvatarUser session ', session)
  return (
    <div className={styles.user}>
      <Image
        className={styles.userImage}
        // src={'/noAvatar.png'}
        src={user?.image || '/noAvatar.png'}
        alt=""
        width="50"
        height="50"
      />
      <div className={styles.userDetail}>
        {/* <span className={styles.username}>{'rrrr'}</span> */}
        {/* <span className={styles.userTitle}>
          {user?.isAdmin ? 'Admin' : 'User'}
        </span> */}
        <span className={styles.username}>
          {user?.name || user?.email || 'No name'}
        </span>
        {/* <span className={styles.username}>{user?.email}</span> */}
      </div>
    </div>
  )
}

export default AvatarUser
