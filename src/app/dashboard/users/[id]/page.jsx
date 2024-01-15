// 1:29ж42

// import { updateUser } from '@/lib/actions'
import { fetchUserAcc } from '@/lib/data'
import styles from '@/components/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { updateUser } from '@/lib/actions/actionsUsers'

const SingleUserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUserAcc(id)

  console.log('SingleUserPage user.address', user)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={user.img || '/noAvatar.png'} alt="" fill />
          </div>
          {user?.username || 'No name'}
        </div>
        <div className={styles.formContainer}>
          <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user.id} />
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder={user?.username || 'Имя'}
            />
            <label>phone</label>
            <input type="text" name="addressPhone" placeholder={'77777777'} />
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email} />
            <label>Password</label>
            <input type="password" name="password" placeholder="******" />
            <label>Image</label>
            <input type="img" name="img" placeholder="ссылка на изображение" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin" defaultValue={user.isAdmin}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive" defaultValue={user.isActive}>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <button>Update</button>
          </form>
          {/* <form className={styles.form}>
            <input type="hidden" name="id" />
            <label>Username</label>
            <input type="text" name="username" placeholder={'Имя'} />
            <label>Surname</label>
            <input type="text" name="surname" placeholder={'Фамилия'} />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={'+7-(777)-777-77-77'}
            />
            <button>Update</button>
          </form> */}
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
