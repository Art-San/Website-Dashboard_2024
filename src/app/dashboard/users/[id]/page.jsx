// 1:29ж42

// import { updateUser } from '@/lib/actions'
import { fetchUserAds, fetchUser } from '@/lib/data'
import styles from '@/components/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { updateUser, updateUserAds } from '@/lib/actions/actionsUsers'

const SingleUserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id)
  const address = await fetchUserAds(user.id)
  // console.log('SingleUserPage user', user.id)
  // console.log('SingleUserPage address', address)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={user?.img || '/noAvatar.png'} alt="" fill />
          </div>
          {user?.name || 'No name'}
        </div>
        <div className={styles.formContainer}>
          <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user?.id} />
            <label>Username</label>
            <input type="text" name="name" placeholder={user?.name || 'Имя'} />
            <label>Email</label>
            <input type="email" name="email" placeholder={user?.email} />
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
          <form action={updateUserAds} className={styles.form}>
            <input type="hidden" name="id" value={address.id} />
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={address?.phone || '+7-(777)-777-77-77'}
            />
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder={address?.country || 'Страна'}
            />
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder={address?.city || 'Город'}
            />
            <label>Street</label>
            <input
              type="text"
              name="street"
              placeholder={address?.street || 'Улица'}
            />
            <label>Number</label>
            <input
              type="text"
              name="number"
              placeholder={address?.number || 'Номер'}
            />
            <label>PostalCode</label>
            <input
              type="text"
              name="postalCode"
              placeholder={address?.postalCode || 'Индекс'}
            />

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
            <input type="text" name="name" placeholder={'John Doe'} />
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
