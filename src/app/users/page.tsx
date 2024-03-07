import RegisterForm from '@/app/auth/register/components/RegisterForm'
import ListUser from '@/app/users/components/ListUser'
import { GET } from "@/app/api/users/route"
import { type Users } from "@/app/types/user"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession, Session } from "next-auth";
import { redirect } from 'next/navigation'

export default async function UsersPage() {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login')
  }

  const users: Users = await (await GET()).json()

  return (
    <main className=" w-full min-h-screen flex items-center justify-center ">
      <div className='flex py-24'>
        <div className='w-full'>
          <RegisterForm />
        </div>
        <div className='w-full'>
          <ListUser users={users} />
        </div>
      </div>
    </main>
  );
}
