// // import { SEARCH } from "@/app/api/users/[id]/route"
// import DeleteButton from "@/app/users/searchUser/components/DeleteButton"

// interface Params {
//    params:{
//        id: string
//    }
// }


export default function Page() {
  return (
    <div>page</div>
  )
}


// export default async function Page({params}: Params) {
//     console.log(params.id)
//     //para renderizar data
//     const res = await SEARCH({params: {id: params.id}})
//     const users = await res.json()
//     console.log(users)

//     return (
//         <div className='w-full min-h-screen flex justify-center items-center'>
//             <ul>
//                 <li>
//                     <p>{users.user_id}</p>
//                     <p>{users.user_name}</p>
//                     <p>{users.user_email}</p>
//                     <p>{users.user_password}</p>
//                     <p>{users.user_created_on.toString()}</p>
//                     <p>{users.user_updated_at.toString()}</p>
//                     <DeleteButton user_id={users.user_id} /> 
//                     <hr className="my-2" />
//                 </li>

//             </ul>
//         </div>
//     )
// }
