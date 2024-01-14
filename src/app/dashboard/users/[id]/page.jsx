// 1:29ж42

// import { updateUser } from '@/lib/actions'
import { fetchUserAcc } from '@/lib/data'
import styles from '@/components/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = async ({ params }) => {
  const { id } = params
  const { user, acc } = await fetchUserAcc(id)

  // console.log('SingleUserPage user', user)
  // console.log('SingleUserPage acc', acc.phone)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={acc.img || '/noAvatar.png'} alt="" fill />
          </div>
          {user.username}
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            {/* <form action={updateAcc} className={styles.form}> */}
            <input type="hidden" name="id" value={acc.id} />
            <label>Username</label>
            <input type="text" name="username" placeholder={acc.username} />
            <label>Surname</label>
            <input type="text" name="surname" placeholder={acc.surname} />
            <label>Image</label>
            <input type="img" name="img" placeholder="ссылка на изображение" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder={acc.phone} />
            <button>Update</button>
          </form>
          <form className={styles.form}>
            {/* <form action={updateUser} className={styles.form}> */}
            <input type="hidden" name="id" value={user.id} />
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email} />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} selected={user.isAdmin}>
                Yes
              </option>
              <option value={false} selected={!user.isAdmin}>
                No
              </option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>
                Yes
              </option>
              <option value={false} selected={!user.isActive}>
                No
              </option>
            </select>
            <button>Update</button>
          </form>
        </div>
      </div>

      {/*1:35:00*/}
      {/* <div className=" flex gap-[50px] mt-5">
        <div className=" basis-[25%] bg-bgSoft p-5 rounded-[10px] font-bold text-textSoft h-max">
          <div className=" w-full h-[200px] relative rounded-[10px] overflow-hidden mb-5">
            <Image src="/noAvatar.png" alt="" fill />
          </div>
          {'John Doe'}
        </div>
        <div className=" basis-[75%] bg-bgSoft p-5 rounded-[10px]">
          <form className={styles.form}>
            <input type="hidden" name="id" />
            <label>Username</label>
            <input type="text" name="username" placeholder={'John Doe'} />
            <label>Email</label>
            <input type="email" name="email" placeholder={'JohnDoe@mail.com'} />
            <label>Password</label>
            <input type="password" name="password" placeholder={'John Doe'} />
            <label>Phone</label>
            <input type="text" name="phone" placeholder={'123456'} />
            <label>Address</label>
            <textarea name="address" placeholder={'tomsk'} />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={'true'}>Yes</option>
              <option value={'false'}>No</option>
            </select>
            <button>Update</button>
          </form>
          <button className=" w-full p-5 bg-[#008080] text-text border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </div>
      </div> */}
    </>
  )
}

export default SingleUserPage
