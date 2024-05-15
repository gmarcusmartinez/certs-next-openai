import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <SignIn path="/sign-in" />
      </main>
    </div>
  )
}
